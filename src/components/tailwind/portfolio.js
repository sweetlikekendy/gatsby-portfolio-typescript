import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PortfolioCard from "./portfolio-card"

export default function Portfolio(props) {
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
      render={data => {
        return (
          // add bg color to here if you want it
          <div
            className="max-w-6xl mx-auto relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
            {...props}
          >
            <div className="max-w-lg mx-auto lg:text-center lg:max-w-3xl">
              <h2 className="text-3xl tracking-normal font-extrabold text-blueGray-900 sm:text-4xl">
                My Portfolio
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-blueGray-500 sm:mt-4">
                View my current & past personal projects/work I've done.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto pt-12 grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {data.allDataJson.edges[0].node.projects.map(
                (
                  {
                    imgSrc,
                    imgAlt,
                    description,
                    demoLink,
                    repoLink,
                    title,
                    type,
                  },
                  index
                ) => (
                  <PortfolioCard
                    key={index}
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
        )
      }}
    />
  )
}
