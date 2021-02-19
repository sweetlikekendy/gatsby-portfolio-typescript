/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import tw, { css } from "twin.macro"
import serializers from "./serializers"
import clientConfig from "../../client-config"

export default function PortableBlockContent({ blocks }) {
  return (
    <BlockContent
      css={css`
        h2,
        h3,
        h4,
        h5,
        h6 {
          ${tw`mb-5 sm:mb-6 lg:mb-7`}
        }

        h2 {
          ${tw`text-2xl sm:text-3xl lg:text-4xl`}
        }
        h3 {
          ${tw`text-xl sm:text-2xl lg:text-3xl`}
        }
        h4 {
          ${tw`text-lg sm:text-xl lg:text-2xl`}
        }

        p,
        ul,
        ol,
        figure,
        pre {
          ${tw`mb-4 sm:mb-5 lg:mb-6`}
        }
      `}
      blocks={blocks}
      serializers={serializers}
      // imageOptions={{ w: 320, h: 240, fit: "max" }}
      {...clientConfig.sanity}
    />
  )
}
