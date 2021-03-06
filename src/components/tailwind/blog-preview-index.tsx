import * as React from "react";
import { format } from "date-fns";
import { Link } from "gatsby";
import { CategoryTag } from "../../styles";
import "twin.macro";
interface BlogPreviewIndexProps {
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
}

export default function BlogPreviewIndex({
  category,
  title,
  description,
  publishedAt,
  slug,
  ...props
}: BlogPreviewIndexProps) {
  return (
    <div tw="flex flex-col" {...props}>
      <div>
        <CategoryTag category={category} />
      </div>
      <div tw="flex-1">
        <Link to={slug} tw="block mt-4">
          <p tw="text-xl font-semibold text-blueGray-900">{title}</p>
          <p tw="mt-3 text-base text-blueGray-500">{description}</p>
        </Link>
      </div>
      <div tw="mt-6 flex items-center justify-between">
        <div tw="flex space-x-1 text-sm text-blueGray-500">
          <time dateTime={publishedAt}>{format(new Date(publishedAt), `MMM d, yyyy`)}</time>
          {/* <span aria-hidden="true">&middot;</span> */}
          {/* <span>6 min read</span> */}
        </div>
      </div>
    </div>
  );
}
