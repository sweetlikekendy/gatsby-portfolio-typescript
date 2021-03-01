import React from "react"

export default function Section(props) {
  return (
    <section className="max-w-6xl mt-12 mx-auto p-4 xl:p-0" {...props}>
      {props.children}
    </section>
  )
}
