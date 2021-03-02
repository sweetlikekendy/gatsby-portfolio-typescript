import * as React from "react";
import Img from "gatsby-image";
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai";
import { ExternalPrimaryButton, ExternalSecondaryButton } from "../../styles";
export interface IPortfolioCardProps {
  demoLink: string;
  description: string;
  imgAlt: string;
  imgSrc: {
    childImageSharp: {
      fluid: {};
    };
  };
  repoLink: string;
  type: string;
  title: string;
}

const PortfolioCard = ({
  demoLink,
  description,
  imgAlt,
  imgSrc,
  repoLink,
  type,
  title,
  ...rest
}: IPortfolioCardProps) => {
  return (
    <div
      className="flex flex-col shadow-lg overflow-hidden rounded-md"
      {...rest}
    >
      <div className="flex-shrink-0">
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
          <img
            className="h-48 w-full object-cover"
            src="http://via.placeholder/400/300"
            alt={imgAlt}
          />
        )}
      </div>
      {type && title && description && (
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600">{type}</p>

            <div className="block mt-2">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <p className="text-xl font-semibold text-blueGray-900 hover:text-blueGray-500">
                  {title}
                </p>
              </a>
              <p className="mt-3 text-base text-blueGray-500">{description}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-1 mt-5 flex flex-col sm:flex-row sm:justify-start lg:flex-col xl:flex-row">
              {demoLink && (
                <ExternalPrimaryButton href={demoLink} isSmall>
                  View demo <AiFillPlayCircle className="ml-2" />
                </ExternalPrimaryButton>
              )}
              {repoLink && (
                <div className="mt-2 sm:mt-0 sm:ml-2 lg:mt-2 lg:ml-0 xl:mt-0 xl:ml-2">
                  <ExternalSecondaryButton href={repoLink} isSmall>
                    Source code
                    <AiFillGithub className="ml-2" />
                  </ExternalSecondaryButton>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
