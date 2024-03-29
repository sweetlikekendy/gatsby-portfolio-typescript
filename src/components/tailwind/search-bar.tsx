import * as React from "react";
import "twin.macro";
import { HiOutlineSearch } from "react-icons/hi";
export interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div tw="relative max-w-2xl mx-auto">
      <label htmlFor="search">
        <span className="sr-only">Search blog posts</span>
      </label>
      <input
        tw="pr-10 w-full rounded-md text-blueGray-600 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500 focus:shadow-2xl"
        defaultValue={searchQuery}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search my blogs here"
      />
      <div tw="absolute right-0 top-0 mr-4 mt-3">
        <HiOutlineSearch tw="text-blueGray-500" />
        <span className="sr-only">Search</span>
      </div>
    </div>
  );
}
