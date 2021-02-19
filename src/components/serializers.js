import React from "react"
import Figure from "./figure"
import CodeBlock from "./code-block"

export default {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: CodeBlock,
  },
}
