import * as React from "react";
import { FiCheck } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import { PrimaryButton } from "../../styles";

interface IContactConfirmationModalProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  formState: boolean;
  message: string;
}

export default function ContactConfirmationModal({
  modalState,
  setModalState,
  formState,
  message,
}: IContactConfirmationModalProps) {
  return (
    <div className="fixed z-40 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            {formState ? (
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <FiCheck className="h-6 w-6 text-green-600" />
              </div>
            ) : (
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <IoWarningOutline className="h-6 w-6 text-red-600" />
              </div>
            )}
            <div className="mt-3 text-center sm:mt-5">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Message {formState ? `successfully` : `unsuccessfully`} sent!
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{message}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <PrimaryButton
              type="button"
              className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2 sm:text-sm"
              onClick={() => setModalState(!modalState)}
            >
              Click to close
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
