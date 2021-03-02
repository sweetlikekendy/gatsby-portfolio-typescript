import * as React from "react";

export interface IChildrenProps {
  children: React.ReactNode;
}

export interface IButtonProps {
  children: React.ReactNode;
  isSmall?: boolean;
  type: "button" | "submit" | "reset" | undefined;
}
export interface IExternalButtonProps {
  children: React.ReactNode;
  isSmall?: boolean;
  href?: string;
}
export interface IInternalButtonProps {
  children: React.ReactNode;
  isSmall?: boolean;
  to: string;
}
