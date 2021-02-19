import React from "react"

export default function CategoryTag({ category }) {
  const lowercaseCategory = category.toString().toLowerCase()

  if (lowercaseCategory === `dev talk`) {
    return (
      <span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800 mb-1">
        {category}
      </span>
    )
  }
  if (lowercaseCategory === `hobbies`) {
    return (
      <span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800 mb-1">
        {category}
      </span>
    )
  }
  if (lowercaseCategory === `technology`) {
    return (
      <span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-pink-100 text-pink-800 mb-1">
        {category}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 mb-1">
      {category}
    </span>
  )
}
