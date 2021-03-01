import React from "react"
import { Link } from "gatsby"
import { format } from "date-fns"
import "twin.macro"
import { CategoryTag } from "../../styles"

export default function SearchResults({ results }) {
  const base = process.env.GATSBY_BLOG_URL || "/blog"

  return (
    <div tw="max-w-2xl mx-auto">
      <ul tw="absolute z-10 top-0 mt-16 max-w-2xl bg-white divide-blueGray-300 divide-y rounded-md shadow-2xl">
        {results.map(post => (
          <li key={post.slug} tw="relative p-4 hover:bg-blueGray-100">
            <div tw="mb-3 flex justify-between space-x-3">
              <div tw="flex-1 min-w-0">
                <Link to={`${base}/${post.slug}`} tw="block focus:outline-none">
                  <span tw="absolute inset-0" aria-hidden="true"></span>
                  <p tw="truncate font-bold text-blueGray-700">{post.title}</p>
                </Link>
              </div>
              <CategoryTag category={post.category} />
            </div>
            <div tw="mb-3">
              <p tw="line-clamp-2 text-blueGray-500">{post.description}</p>
            </div>
            <time
              dateTime={post.publishedAt}
              tw="flex-shrink-0 whitespace-nowrap italic text-blueGray-500"
            >
              {format(new Date(post.publishedAt), `MMM d, yyyy`)}
            </time>
          </li>
        ))}
      </ul>
    </div>
  )
}
