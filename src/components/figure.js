/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../client-config.js"
import tw, { css } from "twin.macro"
import { StyledLink } from "../styles/index.js"

export default function Figure({ node }) {
  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 800 },
    clientConfig.sanity
  )
  return (
    <figure>
      <Img tw="w-full h-72 mb-3" fluid={fluidProps} alt={node.alt} />
      {/* <figcaption>{node.caption}</figcaption> */}
      <figcaption tw=" text-blueGray-500 italic sm:text-center">
        {node.caption}
        {node.imageCreditPhotographer && node.imageCreditUrl && (
          <span>
            . Photographed by{" "}
            <a
              href={node.imageCreditUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledLink>{node.imageCreditPhotographer}</StyledLink>
            </a>
            .
          </span>
        )}
      </figcaption>
    </figure>
  )
}
