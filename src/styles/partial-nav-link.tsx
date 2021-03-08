import * as React from "react";
import { Link } from "gatsby";
import "twin.macro";
export interface PartialNavLinkProps {
  children: React.ReactNode;
  to: string;
}

const PartialNavLink = ({ children, to, ...rest }: PartialNavLinkProps) => {
  interface PartiallyActive {
    isPartiallyCurrent: boolean;
  }
  // this link will be active when itself or deeper routes
  // are current
  const isPartiallyActive = ({ isPartiallyCurrent }: PartiallyActive) => {
    return isPartiallyCurrent
      ? {
          className:
            // eslint-disable-next-line max-len
            "text-blue-600 inline-flex items-center text-base font-medium px-4 py-2 hover:text-blue-800 active:text-blue-900",
        }
      : {};
  };
  return (
    <Link
      to={to}
      getProps={isPartiallyActive}
      tw="text-base font-medium text-blueGray-600 px-4 py-2 hover:text-blue-600 active:text-blue-700"
      {...rest}
    >
      {children}
    </Link>
  );
};

export default PartialNavLink;
