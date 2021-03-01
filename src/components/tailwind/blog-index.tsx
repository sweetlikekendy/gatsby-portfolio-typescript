import { Link } from "gatsby"
import React from "react"
import { BlogPreviewIndex } from "."
import { StyledLink } from "../../styles"

export default function BlogIndex({ blogPosts }) {
  return (
    <div className="max-w-6xl mx-auto bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto lg:max-w-6xl">
        <div className="max-w-lg mx-auto lg:text-center lg:max-w-3xl">
          <h2 className="text-3xl tracking-normal font-extrabold text-blueGray-900 sm:text-4xl">
            Recent Blog Posts
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-blueGray-500 sm:mt-4">
            See what else I've written about{" "}
            <Link to="/blog">
              <StyledLink>here.</StyledLink>
            </Link>
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {blogPosts.map(blog => (
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
  )
}
