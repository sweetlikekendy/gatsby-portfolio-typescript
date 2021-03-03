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
  aspectRatio: number;
  base64: string;
  sizes: string;
  src: string;
  srcSet: string;
  srcSetWebp: string;
  srcWebp: string;
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

export interface PostData {
  categories: Categories[];
  description: string;
  mainImage: ImageProps;
  publishedAt: string;
  updatedAt: string;
  slug: { current: string };
  title: string;
  _createdAt: string;
  _updatedAt: string;
  _rawBody?: any[] | any;
}

export interface StoreFromQuery {
  author: string;
  category: string;
  description: string;
  publishedAt: string;
  slug: string;
  text: any[] | any;
  title: string;
}

export interface LocalSearchPages {
  index: string;
  store: StoreFromQuery;
}

export interface BlogPostQuery {
  nodes: PostData[];
  totalCount: number;
}
export interface BlogData {
  posts: {
    nodes: PostData[];
    totalCount: number;
  };
  localSearchPages: LocalSearchPages;
}

export interface PageContext {
  base: string;
  next: PageContextPage;
  prev: PageContextPage;
  slug: string;
}
