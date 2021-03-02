import * as React from "react";

export interface IChildrenProps {
  children: React.ReactNode;
}

export interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  isSmall?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
