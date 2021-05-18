/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import BlockContent from "@sanity/block-content-to-react";
import tw from "twin.macro";
import { css } from "@emotion/react";
import serializers from "./serializers";
import clientConfig from "../../client-config";

export interface BlockContentProps {
  blocks: any[] | any;
}

export default function PortableBlockContent({ blocks }: BlockContentProps) {
  return (
    <BlockContent
      css={css`
        h2,
        h3,
        h4,
        h5,
        h6 {
          ${tw`mb-3 sm:mb-4 lg:mb-5`}
        }

        h2 {
          ${tw`text-2xl sm:text-3xl`}
        }
        h3 {
          ${tw`text-xl sm:text-2xl`}
        }
        h4 {
          ${tw`text-lg sm:text-xl`}
        }

        p,
        ul,
        ol,
        figure,
        pre {
          ${tw`mb-4 sm:mb-5 lg:mb-6`}
        }

        a {
          ${tw`text-blue-500`}
        }
        code {
          ${tw`bg-blueGray-100 p-1 rounded-md`}
        }

        pre code {
          background-color: transparent;
        }
        ${tw`break-words`}
      `}
      blocks={blocks}
      serializers={serializers}
      // imageOptions={{ w: 320, h: 240, fit: "max" }}
      {...clientConfig.sanity}
    />
  );
}
