import React from "react"

export default function Underline({ children }) {
  return (
    <span className="underline bg-gradient-to-r from-emerald-300 to-lightBlue-300 bg-no-repeat transition-all 0.25s ease-in bg-szUnderline bg-posUnderline bg hover:bg-szUnderlineHover">
      {children}
    </span>
  )
}
