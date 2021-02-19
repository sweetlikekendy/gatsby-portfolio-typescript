import React from "react"
import "twin.macro"
import { HiOutlineSearch } from "react-icons/hi"

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <form
      action="/"
      method="GET"
      autoComplete="off"
      tw="relative max-w-2xl mx-auto"
    >
      <label htmlFor="search">
        <span className="sr-only">Search blog posts</span>
      </label>
      <input
        tw="pr-10 w-full rounded-md text-blueGray-600 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500 focus:shadow-2xl"
        // className={`${textSize} ${fontWeight} ${backgroundColor} ${border}`}
        defaultValue={searchQuery}
        onInput={e => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search my blogs here"
      />
      <button type="submit" tw="absolute right-0 top-0 mr-4 mt-3">
        <HiOutlineSearch tw="text-blueGray-500" />
        <span className="sr-only">Search</span>
      </button>
    </form>
  )
}
