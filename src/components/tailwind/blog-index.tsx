import * as React from "react";
import { Link } from "gatsby";
import { BlogPreviewIndex } from ".";
import { StyledLink } from "../../styles";
import "twin.macro";

export interface BlogIndexProps {
  blogPosts: {
    title: string;
    categories: { title: string }[];
    description: string;
    _createdAt: string;
    slug: { current: string };
  }[];
}

export default function BlogIndex({ blogPosts }: BlogIndexProps) {
  return (
    <div tw="max-w-6xl mx-auto bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div tw="relative max-w-lg mx-auto lg:max-w-6xl">
        <div tw="max-w-lg mx-auto lg:text-center lg:max-w-3xl">
          <h2 tw="text-3xl tracking-normal font-extrabold text-blueGray-900 sm:text-4xl">
            Recent Blog Posts
          </h2>
          <p tw="mt-3 max-w-2xl mx-auto text-xl text-blueGray-500 sm:mt-4">
            See what else I've written about{" "}
            <Link to="/blog">
              <StyledLink>here.</StyledLink>
            </Link>
          </p>
        </div>
        <div tw="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {blogPosts.map((blog) => (
            <BlogPreviewIndex
              key={blog.title}
              category={blog.categories[0].title}
              title={blog.title}
              description={blog.description}
              createdAt={blog._createdAt}
              slug={`blog/${blog.slug.current}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
