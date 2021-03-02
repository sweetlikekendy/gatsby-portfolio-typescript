import * as React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { ContactConfirmationModal } from ".";
import { PrimaryButton, StyledLink } from "../../styles";

export default function Contact() {
  const [message, setMessage] = React.useState("Nothing to report!");
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isFormSuccess, setFormSuccess] = React.useState(false);
  const { register, handleSubmit, errors, formState, reset } = useForm();

  const encode = (data: {
    formName: string;
    email: string;
    fullName: string;
    phone: string;
    subject: string;
    message: string;
    trapCard: string;
  }) => {
    return Object.keys(data)
      .map(
        // TODO data[key] typescript error
        // Element implicitly has an 'any' type because expression of type 'string'
        // can't be used to index type '{ formName: string; email: string; fullName: string;
        // phone: string; subject: string; message: string; trapCard: string; }'.
        // No index signature with a parameter of type 'string' was found on type
        //  '{ formName: string; email: string; fullName: string; phone: string;
        // subject: string; message: string; trapCard: string; }'.ts(7053)
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (
    formData: {
      email: string;
      fullName: string;
      phone: string;
      subject: string;
      message: string;
      trapCard: string;
    },
    event: React.FormEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ formName: "contact-me", ...formData }),
    })
      .then((response) => {
        const { status } = response;

        switch (status) {
          case 200:
            setModalOpen(true);
            setFormSuccess(true);
            setMessage(
              "Thank you for reaching to me 😁 I will reply to your message ASAP."
            );
            reset();
            break;
          case 400:
            setModalOpen(true);
            setFormSuccess(false);
            setMessage(
              "Hmm...unable to send your message. Double check the form and try again. If this error message shows up again, please try again later."
            );
            break;
          case 404:
            setModalOpen(true);
            setFormSuccess(false);
            setMessage("The server cannot be found! Please try again later.");
            break;
        }
        console.log(response);
      })
      .catch((error) => {
        // TODO handle error
        console.log(error);
      });
  };

  return (
    // Remove negative margin if you use this form and it's not on the bottom on top of the footer
    <div className="relative bg-white lg:mt-16 -mb-10 sm:-mb-12 lg:-mb-16">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-blueGray-50"></div>
      </div>
      <div className="relative max-w-6xl mx-auto lg:grid lg:grid-cols-5">
        <div className="flex items-center bg-blueGray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-16 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-normal text-blueGray-900 sm:text-3xl">
              Ready to connect?
            </h2>
            <p className="mt-3 text-lg leading-6 text-blueGray-500">
              Leave me a message by filling out the form or click on my email
              address!
            </p>
            <dl className="mt-8 text-base text-blueGray-500">
              <div className="mt-6">
                <dt className="sr-only">Email</dt>
                <dd className="flex items-center">
                  <AiOutlineMail className="h-6 w-6" />
                  <a
                    className="ml-3"
                    href="mailto:kendyhnguyen1991@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledLink>kendyhnguyen1991@gmail.com</StyledLink>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-16 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              method="POST"
              // TODO onsubmit ts error
              onSubmit={handleSubmit(onSubmit)}
              name="contact-me"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {isModalOpen && (
                <ContactConfirmationModal
                  modalState={isModalOpen}
                  setModalState={setModalOpen}
                  formState={isFormSuccess}
                  message={message}
                />
              )}
              <fieldset
                // disabled={isSubmitting || formState.submitCount >= 10}
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="full-name"
                    autoComplete="name"
                    className="block text-blueGray-600 w-full shadow-sm rounded-md py-3 px-4 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500  "
                    placeholder="Full name"
                    ref={register({ required: "Required" })}
                  />
                  {errors.full_name && (
                    <p className="mt-2 text-red-500">
                      {errors.full_name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block text-blueGray-600 w-full shadow-sm rounded-md py-3 px-4 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500  "
                    placeholder="Email"
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Entered value does not match email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-2 text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block text-blueGray-600 w-full shadow-sm rounded-md py-3 px-4 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500  "
                    placeholder="Phone"
                    ref={register({ required: "Required" })}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-red-500">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="block text-blueGray-600 w-full shadow-sm rounded-md py-3 px-4 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500  "
                    placeholder="Subject"
                    ref={register({ required: "Required" })}
                  />
                  {errors.subject && (
                    <p className="mt-2 text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block text-blueGray-600 w-full shadow-sm rounded-md py-3 px-4 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500  "
                    placeholder="Message"
                    ref={register({ required: "Required" })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="hidden">
                  <label htmlFor="trapCard">
                    Don't activate this bot trap card by filling this input if
                    you're human
                  </label>
                  <textarea name="trapCard" ref={register()}></textarea>
                </div>
                <div>
                  <PrimaryButton type="submit">Submit</PrimaryButton>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
