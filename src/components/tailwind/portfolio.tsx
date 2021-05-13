import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import PortfolioCard from "./portfolio-card";
import { GatsbyImageFluidProps } from "../../interfaces";
import "twin.macro";
export interface PortfolioCardParams {
  imgSrc: {
    childImageSharp: GatsbyImageFluidProps;
  };
  techStack: Array<string>;
  imgAlt: string;
  type: string;
  title: string;
  description: string;
  demoLink: string;
  repoLink?: string;
}

export default function Portfolio(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <StaticQuery
      query={graphql`
        {
          allDataJson {
            edges {
              node {
                projects {
                  title
                  techStack
                  repoLink
                  description
                  demoLink
                  imgAlt
                  type
                  imgSrc {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          // add bg color to here if you want it
          <div tw="max-w-6xl mx-auto relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" {...props}>
            <div tw="max-w-lg mx-auto lg:text-center lg:max-w-3xl">
              <h2 tw="text-3xl tracking-normal font-extrabold text-blueGray-900 sm:text-4xl">My Portfolio</h2>
              <p tw="mt-3 max-w-2xl mx-auto text-xl text-blueGray-500 sm:mt-4">
                View my current & past personal projects/work I've done.
              </p>
            </div>
            <div tw="mt-12 max-w-lg mx-auto pt-12 grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {data.allDataJson.edges[0].node.projects.map(
                ({ title, techStack, imgSrc, imgAlt, type, description, demoLink, repoLink }: PortfolioCardParams) => (
                  <PortfolioCard
                    key={title}
                    techStack={techStack}
                    imgSrc={imgSrc}
                    imgAlt={imgAlt}
                    type={type}
                    title={title}
                    description={description}
                    demoLink={demoLink}
                    repoLink={repoLink}
                  />
                )
              )}
            </div>
          </div>
        );
      }}
    />
  );
}
