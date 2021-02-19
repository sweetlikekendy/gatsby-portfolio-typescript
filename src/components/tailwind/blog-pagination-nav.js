import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi"

export default function BlogPaginationNav({
  postsPerPage,
  totalCount,
  currentPage,
  base,
}) {
  const totalPages = Math.ceil(totalCount / postsPerPage)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const hasNextPage = nextPage <= totalPages
  const hasPrevPage = prevPage >= 1

  return (
    <nav className="border-t border-blueGray-200 px-0 flex items-center justify-between">
      <div className="-mt-px w-0 flex-1 flex">
        {hasPrevPage && (
          <Link
            title="Prev Page"
            to={`${base}${prevPage > 1 ? `/${prevPage}` : ""}`}
            rel="prev"
            className="border-t-2  pt-4 pr-1 inline-flex items-center text-sm font-medium text-blueGray-500 hover:text-blueGray-800 hover:border-blueGray-400"
          >
            <HiArrowNarrowLeft className="mr-3 h-5 w-5 text-blueGray-400" />
            Previous
          </Link>
        )}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            to={`${base}${i > 0 ? `/${i + 1}` : ""}`}
            key={`page-${i}`}
            activeStyle={tw`border-blue-500 text-blue-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
            className=" text-blueGray-500 hover:text-blueGray-800 hover:border-blueGray-400 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        {hasNextPage && (
          <Link
            title="Next Page"
            to={`${base}/${nextPage}`}
            rel="next"
            className="border-t-2  pt-4 pl-1 inline-flex items-center text-sm font-medium text-blueGray-500 hover:text-blueGray-800 hover:border-blueGray-400"
          >
            Next
            <HiArrowNarrowRight className="ml-3 h-5 w-5 text-blueGray-400" />
          </Link>
        )}
      </div>
    </nav>
  )
}
