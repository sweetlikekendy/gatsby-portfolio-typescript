import React from "react"

export default function StyledLink({ children, ...rest }) {
  return (
    <span className="text-blue-600 hover:text-blue-700 " {...rest}>
      {children}
    </span>
  )
}
