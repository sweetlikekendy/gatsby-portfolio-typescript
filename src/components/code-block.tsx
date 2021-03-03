import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

export interface ICodeBlockProps {
  node: {
    _key: string;
    _type: string;
    language: string;
    code: string;
  };
}

export default function CodeBlock({ node }: ICodeBlockProps) {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;
  return (
    <SyntaxHighlighter language={language || "text"}>{code}</SyntaxHighlighter>
  );
}
