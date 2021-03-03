import * as React from "react";
import { ExternalButtonProps } from "../interfaces";

export default function ExternalSecondaryButton({
  children,
  isSmall,
  href,
  ...rest
}: ExternalButtonProps) {
  if (isSmall) {
    return (
      <a
        href={href}
        className="w-full flex items-center justify-center px-4 py-2 shadow-sm rounded-md text-base font-medium text-blue-700 bg-blue-100 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-100"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="w-full flex items-center justify-center px-8 py-3 shadow-sm rounded-md text-base font-medium text-blue-700 bg-blue-100 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-100 md:py-4 "
      {...rest}
    >
      {children}
    </a>
  );
}
