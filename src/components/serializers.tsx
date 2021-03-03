import * as React from "react";
import Figure from "./figure";
import CodeBlock from "./code-block";

export default {
  types: {
    authorReference: ({ node }: { node: { author: { name: string } } }) => {
      return <span>{node.author.name}</span>;
    },
    mainImage: Figure,
    code: CodeBlock,
  },
};
