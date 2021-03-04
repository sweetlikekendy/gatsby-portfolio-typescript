import * as React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import "twin.macro";

export default function Footer() {
  const date: Date = new Date();
  const year: number = date.getFullYear();

  return (
    <footer tw="flex-shrink-0 bg-blueGray-50 mt-10 sm:mt-12 lg:mt-16">
      <div tw="max-w-6xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div tw="flex justify-center space-x-6 md:order-2">
          <a
            href="http://github.com/sweetlikekendy/"
            target="_blank"
            rel="noreferrer noopener"
            tw="text-blueGray-600 hover:text-blue-600 active:text-blue-700"
          >
            <span tw="sr-only">GitHub</span>
            <AiFillGithub tw="h-6 w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/kendy-nguyen-a51796a0/"
            target="_blank"
            rel="noreferrer noopener"
            tw="text-blueGray-600 hover:text-blue-600 active:text-blue-700"
          >
            <span tw="sr-only">LinkedIn</span>
            <AiFillLinkedin tw="h-6 w-6" />
          </a>
          <a
            href="mailto:kendyhnguyen1991@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            tw="text-blueGray-600 hover:text-blue-600 active:text-blue-700"
          >
            <span tw="sr-only">Facebook</span>
            <AiOutlineMail tw="h-6 w-6" />
          </a>
        </div>
        <div tw="mt-8 md:mt-0 md:order-1">
          <p tw="text-center text-base text-blueGray-500">
            &copy; {year} Kendy Nguyen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
