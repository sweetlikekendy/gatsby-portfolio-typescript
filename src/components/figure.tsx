import * as React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import "twin.macro";
import clientConfig from "../../client-config";
import { StyledLink } from "../styles";

export interface IFigureProps {
  node: {
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
    caption: string;
    imageCreditPhotographer: string;
    imageCreditUrl: string;
    _key: string;
    _type: string;
  };
}

const Figure = ({ node }: IFigureProps) => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 800 },
    clientConfig.sanity
  );

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
  );
};

export default Figure;
