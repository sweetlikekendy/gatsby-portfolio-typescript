import React from "react"

export default function PrimaryButton({ children, isSmall, ...rest }) {
  if (isSmall) {
    return (
      <span
        className="w-full flex items-center justify-center px-4 py-2 shadow-sm rounded-md border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-700 hover:shadow-md active:shadow-xl active:bg-blue-800 "
        {...rest}
      >
        {children}
      </span>
    )
  }

  return (
    <span
      className="w-full flex items-center justify-center px-8 py-3 shadow-sm rounded-md border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-700 hover:shadow-md active:shadow-xl active:bg-blue-800 md:py-4  "
      {...rest}
    >
      {children}
    </span>
  )
}
