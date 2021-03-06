import * as React from "react";
import Img from "gatsby-image";
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai";
import { ExternalPrimaryButton, ExternalSecondaryButton } from "../../styles";
import { GatsbyImageFluidProps } from "../../interfaces";
import "twin.macro";
export interface PortfolioCardProps {
  demoLink: string;
  description: string;
  techStack: Array<string>;
  imgAlt: string;
  imgSrc: {
    childImageSharp: GatsbyImageFluidProps;
  };
  repoLink?: string;
  type: string;
  title: string;
}

export default function PortfolioCard({
  techStack,
  demoLink,
  description,
  imgAlt,
  imgSrc,
  repoLink,
  type,
  title,
  ...rest
}: PortfolioCardProps) {
  return (
    <div tw="flex flex-col shadow-lg overflow-hidden rounded-md" {...rest}>
      <div tw="flex-shrink-0">
        {imgSrc ? (
          <a href={demoLink} target="_blank" rel="noopener noreferrer nofollow">
            <Img
              fluid={{
                ...imgSrc.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
              alt={imgAlt}
            />
          </a>
        ) : (
          <img tw="h-48 w-full object-cover" src="http://via.placeholder/400/300" alt={imgAlt} />
        )}
      </div>
      {type && title && description && (
        <div tw="flex-1 bg-white p-6 flex flex-col justify-between">
          <div>
            <p tw="text-sm font-medium text-blue-600">{type}</p>

            <div tw="block mt-2">
              <a href={demoLink} target="_blank" rel="noopener noreferrer nofollow">
                <p tw="text-xl font-semibold text-blueGray-900 hover:text-blueGray-500">{title}</p>
              </a>
              <p tw="mt-3 text-base text-blueGray-500">{description}</p>
              {/* <div>
                {techStack.map((tech) => (
                  <div>{tech}</div>
                ))}
              </div> */}
            </div>
          </div>
          <div tw="mt-6 flex items-center">
            <div tw="flex-1 mt-5 flex flex-col sm:flex-row sm:justify-start lg:flex-col xl:flex-row">
              {demoLink && (
                <ExternalPrimaryButton href={demoLink} isSmall>
                  View demo <AiFillPlayCircle tw="ml-2" />
                </ExternalPrimaryButton>
              )}
              {repoLink && (
                <div tw="mt-2 sm:mt-0 sm:ml-2 lg:mt-2 lg:ml-0 xl:mt-0 xl:ml-2">
                  <ExternalSecondaryButton href={repoLink} isSmall>
                    Source code
                    <AiFillGithub tw="ml-2" />
                  </ExternalSecondaryButton>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
