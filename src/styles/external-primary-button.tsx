import * as React from "react";
import { ExternalButtonProps } from "../interfaces";

export default function ExternalPrimaryButton({
  children,
  isSmall,
  href,
  ...rest
}: ExternalButtonProps) {
  if (isSmall) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-2 shadow-sm rounded-md text-base font-medium text-white bg-blue-600 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-700 hover:shadow-md active:shadow-xl active:bg-blue-800 "
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-8 py-3 shadow-sm rounded-md text-base font-medium text-white bg-blue-600 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-700 hover:shadow-md active:shadow-xl active:bg-blue-800 md:py-4  "
      {...rest}
    >
      {children}
    </a>
  );
}
