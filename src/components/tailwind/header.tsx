import React, { useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { GrClose, GrMenu } from "react-icons/gr";
import { SecondaryButton, PartialNavLink, PrimaryButton } from "../../styles";
import tw from "twin.macro";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleMobileMenuToggle = () => setOpen(!open);

  return (
    <div className="flex-shrink-0 relative bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 sm:py-8 sm:px-8 md:space-x-10">
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
            stripHash
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
            <a
              href="mailto:kendyhnguyen1991@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 inline-flex items-center justify-center "
            >
              <SecondaryButton isSmall> Contact me </SecondaryButton>
            </a>
          </div>
        </nav>
      </div>
      {/* <!-- 
      Mobile menu, show/hide based on mobile menu state. Entering: "duration-200
      ease-out" From: "opacity-0 scale-95" To: "opacity-100 scale-100" Leaving:
      "duration-100 ease-in" From: "opacity-100 scale-100" To: "opacity-0
      scale-95" --> */}
      {open && (
        <div className="z-20 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-blueGray-50">
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
              <a
                href="mailto:kendyhnguyen1991@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryButton>Contact Me</PrimaryButton>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
