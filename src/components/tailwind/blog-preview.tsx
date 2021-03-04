import * as React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { format } from "date-fns";
import { CategoryTag } from "../../styles";
import { GatsbyImageFluidProps } from "../../interfaces";
import "twin.macro";
interface BlogPreviewProps {
  category: string;
  title: string;
  description: string;
  createdAt: string;
  slug: string;
  imageSrc: GatsbyImageFluidProps;
  imageAlt: string;
}

export default function BlogPreview({
  category,
  title,
  description,
  createdAt,
  slug,
  imageSrc,
  imageAlt,
}: BlogPreviewProps) {
  return (
    <div tw="flex flex-col">
      <div tw="mb-4 h-60 w-full overflow-hidden">
        <Link to={slug}>
          <Img fluid={{ ...imageSrc, aspectRatio: 4 / 3 }} alt={imageAlt} />
        </Link>
      </div>
      <div>
        <Link to={slug} tw="inline-block">
          <CategoryTag category={category} />
        </Link>
      </div>
      <div tw="flex-1">
        <Link to={slug} tw="block mt-4">
          <p tw="text-xl font-semibold text-blueGray-900">{title}</p>
          <p tw="mt-3 text-base text-blueGray-500">{description}</p>
        </Link>
      </div>
      <div tw="mt-6 flex items-center justify-between">
        <div tw="flex space-x-1 text-sm text-blueGray-500">
          <time dateTime={createdAt}>
            {format(new Date(createdAt), `MMM d, yyyy`)}
          </time>
          {/* <span aria-hidden="true">&middot;</span> */}
          {/* <span>6 min read</span> */}
        </div>
      </div>
    </div>
  );
}
