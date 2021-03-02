import * as React from "react";

export interface IChildrenProps {
  children: React.ReactNode;
}

export interface IPrimaryButtonProps {
  children: React.ReactNode;
  isSmall?: boolean;
  type: "button" | "submit" | "reset" | undefined;
}
export interface IExternalPrimaryButtonProps {
  children: React.ReactNode;
  isSmall?: boolean;
  href?: string;
}
export interface IInternalPrimaryButtonProps {
  children: React.ReactNode;
  isSmall?: boolean;
  to?: string;
}
