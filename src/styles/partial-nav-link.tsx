import * as React from "react";
import { Link } from "gatsby";
import { IChildrenProps } from "../interfaces";

const PartialNavLink = ({ children, ...props }: IChildrenProps) => {
  // this link will be active when itself or deeper routes
  // are current
  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent
      ? {
          className:
            "text-blue-600 inline-flex items-center text-base font-medium px-4 py-2 hover:text-blue-800 active:text-blue-900",
        }
      : {};
  };
  return (
    <Link
      getProps={isPartiallyActive}
      className="text-base font-medium text-blueGray-600 px-4 py-2 hover:text-blue-600 active:text-blue-700"
      {...props}
    >
      {children}
    </Link>
  );
};

export default PartialNavLink;
