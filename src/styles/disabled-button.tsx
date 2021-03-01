import React from "react"

export default function DisabledButton({ children, isSmall, ...rest }) {
  if (isSmall) {
    return (
      <span
        className="cursor-not-allowed	w-full flex items-center justify-center px-4 py-2 shadow-sm border border-transparent text-base font-medium text-white bg-blueGray-400 hover:bg-blueGray-500 hover:shadow-md active:shadow-xl active:bg-blueGray-600 "
        {...rest}
      >
        {children}
      </span>
    )
  }

  return (
    <span
      className="cursor-not-allowed	w-full flex items-center justify-center px-8 py-3 shadow-sm border border-transparent text-base font-medium text-white bg-blueGray-400 hover:bg-blueGray-500 hover:shadow-md active:shadow-xl active:bg-blueGray-600 md:py-4  "
      {...rest}
    >
      {children}
    </span>
  )
}
