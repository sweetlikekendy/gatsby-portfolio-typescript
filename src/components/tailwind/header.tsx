import * as React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { GrClose, GrMenu } from "react-icons/gr";
import { ExternalSecondaryButton, PartialNavLink, ExternalPrimaryButton } from "../../styles";
import "twin.macro";

export interface HeaderProps {
  scrolledHeight: number;
}

export default function Header({ scrolledHeight }: HeaderProps) {
  const [open, setOpen] = React.useState(false);

  const handleMobileMenuToggle = () => setOpen(!open);

  return (
    <header
      tw=" flex-shrink-0 bg-white"
      className={`sticky top-0 z-20 ${scrolledHeight > 100 && `shadow-md`} relative`}
    >
      <div tw="max-w-6xl mx-auto flex justify-between items-center p-4 sm:py-4 sm:px-8 md:space-x-10 lg:py-5">
        <div>
          <Link to="/" tw="flex">
            <span tw="sr-only">Home</span>
            <p tw="text-3xl font-bold text-blue-700 tracking-wider md:text-4xl lg:text-6xl">KN</p>
          </Link>
        </div>
        {/* <div tw="-mr-2 -my-2 md:hidden"> */}
        <div tw="md:hidden">
          <button
            type="button"
            tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-blueGray-600 hover:text-blueGray-700 hover:bg-blueGray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={handleMobileMenuToggle}
          >
            <span tw="sr-only">Open menu</span>
            <GrMenu tw="h-6 w-6" />
          </button>
        </div>

        <nav tw="space-x-10 hidden md:block">
          <div tw="flex items-center md:ml-12">
            <PartialNavLink to="/blog">Blog</PartialNavLink>
            <AnchorLink
              to="/#portfolio"
              title="Kendy Nguyen"
              tw="text-base font-medium text-blueGray-600 px-4 py-2 hover:text-blue-700 active:text-blue-800"
              className="stripped"
            >
              Portfolio
            </AnchorLink>
            <div tw="ml-2 inline-flex items-center justify-center ">
              <ExternalSecondaryButton href="mailto:kendyhnguyen1991@gmail.com" isSmall>
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
        <div tw="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div tw="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-blueGray-50">
            <div tw="pt-5 pb-6 px-5">
              <div tw="flex items-center justify-between">
                <div>
                  <Link to="/" tw="flex">
                    <span tw="sr-only">Home</span>
                    <p tw="text-3xl font-bold text-blue-700 tracking-wider">KN</p>
                  </Link>
                </div>
                <div tw="-mr-2">
                  <button
                    type="button"
                    tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-blueGray-400 hover:text-blueGray-600 hover:bg-blueGray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    onClick={() => handleMobileMenuToggle()}
                  >
                    <span tw="sr-only">Close menu</span>
                    <GrClose tw="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div tw="mt-6">
                <nav tw="grid gap-6">
                  <PartialNavLink to="/blog">Blog</PartialNavLink>
                  <AnchorLink
                    to="/#portfolio"
                    title="Kendy Nguyen"
                    tw="text-base font-medium text-blueGray-600 px-4 py-2 hover:text-blueGray-800 active:text-blue-700"
                  >
                    Portfolio
                  </AnchorLink>
                </nav>
              </div>
            </div>
            <div tw="py-6 px-5">
              <ExternalPrimaryButton href="mailto:kendyhnguyen1991@gmail.com">Contact Me</ExternalPrimaryButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
