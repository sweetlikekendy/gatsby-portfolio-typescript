import React from "react"
import { StyledLink } from "../../styles"
import { format } from "date-fns"
import { Link } from "gatsby"
import { CategoryTag } from "../../styles"

export default function BlogPreviewIndex({
  category,
  title,
  description,
  createdAt,
  slug,
}) {
  return (
    <div className="flex flex-col">
      <div>
        <Link to={slug} className="inline-block">
          <CategoryTag category={category} />
        </Link>
      </div>
      <div className="flex-1">
        <Link to={slug} className="block mt-4">
          <p className="text-xl font-semibold text-blueGray-900">{title}</p>
          <p className="mt-3 text-base text-blueGray-500">{description}</p>
        </Link>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex space-x-1 text-sm text-blueGray-500">
          <time dateTime={createdAt}>
            {format(new Date(createdAt), `MMM d, yyyy`)}
          </time>
          {/* <span aria-hidden="true">&middot;</span> */}
          {/* <span>6 min read</span> */}
        </div>
      </div>
    </div>
  )
}
