import * as React from "react";

export interface ChildrenProps {
  children: React.ReactNode;
}
export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  isSmall?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface ExternalButtonProps {
  children: React.ReactNode;
  isSmall?: boolean;
  href?: string;
}
export interface InternalButtonProps {
  children: React.ReactNode;
  isSmall?: boolean;
  to: string;
}

export interface GatsbyImageFluidProps {
  fluid: {
    aspectRatio: number;
    base64: string;
    sizes: string;
    src: string;
    srcSet: string;
    srcSetWebp: string;
    srcWebp: string;
  };
}
export interface ImageProps {
  alt: string;
  asset: {
    fluid: GatsbyImageFluidProps;
  };
  caption: string;
  imageCreditPhotographer: string;
  imageCreditUrl: string;
}

export interface Categories {
  title: string;
}

export interface PageContextPage {
  categories: Categories[];
  title: string;
  slug: {
    current: string;
  };
}

export interface PageContext {
  base: string;
  next: PageContextPage;
  prev: PageContextPage;
  slug: string;
}
