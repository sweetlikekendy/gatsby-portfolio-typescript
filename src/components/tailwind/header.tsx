import * as React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { GrClose, GrMenu } from "react-icons/gr";
import {
  ExternalSecondaryButton,
  PartialNavLink,
  ExternalPrimaryButton,
} from "../../styles";
import tw from "twin.macro";

const Header = () => {
  const [scrolledHeight, setScrolledHeight] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const findScrolledHeight = () => {
    const yScrollAmount = window.scrollY;
    return setScrolledHeight(yScrollAmount);
  };

  const handleMobileMenuToggle = () => setOpen(!open);

  React.useEffect(() => {
    window.addEventListener("scroll", findScrolledHeight);
  }, [scrolledHeight]);

  return (
    <div
      className={`sticky top-0 z-20 ${
        scrolledHeight > 100 && `shadow-md`
      } flex-shrink-0 relative bg-white`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 sm:py-4 sm:px-8 md:space-x-10 lg:py-6">
        <div>
          <Link to="/" className="flex">
            <span className="sr-only">Home</span>
            <p className="text-3xl font-bold text-blue-700 tracking-wider md:text-4xl lg:text-6xl">
              KN
            </p>
          </Link>
        </div>
        {/* <div className="-mr-2 -my-2 md:hidden"> */}
        <div className="md:hidden">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-blueGray-600 hover:text-blueGray-700 hover:bg-blueGray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => handleMobileMenuToggle()}
          >
            <span className="sr-only">Open menu</span>
            <GrMenu className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex space-x-10 hidden md:block">
          <div className="flex items-center md:ml-12">
            <PartialNavLink to="/blog">Blog</PartialNavLink>
            <AnchorLink
              to="/#portfolio"
              title="Kendy Nguyen"
              className="stripped text-base font-medium text-blueGray-600 px-4 py-2 hover:text-blue-700 active:text-blue-800"
            >
              Portfolio
            </AnchorLink>
            <div className="ml-8 inline-flex items-center justify-center ">
              <ExternalSecondaryButton
                href="mailto:kendyhnguyen1991@gmail.com"
                isSmall
              >
                {" "}
                Contact me{" "}
              </ExternalSecondaryButton>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- 
      Mobile menu, show/hide based on mobile menu state. Entering: "duration-200
      ease-out" From: "opacity-0 scale-95" To: "opacity-100 scale-100" Leaving:
      "duration-100 ease-in" From: "opacity-100 scale-100" To: "opacity-0
      scale-95" --> */}
      {open && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-blueGray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/" className="flex">
                    <span className="sr-only">Home</span>
                    <p className="text-3xl font-bold text-blue-700 tracking-wider">
                      KN
                    </p>
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    // activeStyle={tw`border-blue-500 text-blue-600 border-b-2 inline-flex items-center`}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-blueGray-400 hover:text-blueGray-600 hover:bg-blueGray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    onClick={() => handleMobileMenuToggle()}
                  >
                    <span className="sr-only">Close menu</span>
                    <GrClose className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  <PartialNavLink to="/blog">Blog</PartialNavLink>
                  <AnchorLink
                    to="/#portfolio"
                    title="Kendy Nguyen"
                    className="text-base font-medium text-blueGray-600 px-4 py-2 hover:text-blueGray-800 active:text-blue-700"
                  >
                    Portfolio
                  </AnchorLink>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <ExternalPrimaryButton href="mailto:kendyhnguyen1991@gmail.com">
                Contact Me
              </ExternalPrimaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
