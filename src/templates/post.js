import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import { format } from "date-fns"
import "twin.macro"

import Layout from "../components/layout"
import PortableBlockContent from "../components/portable-block-content"
import { CategoryTag, StyledLink } from "../styles"

export default function Post({ data, pageContext }) {
  const { post } = data
  const { prev, next, base } = pageContext

  return (
    <Layout>
      <div tw="max-w-3xl mx-auto p-4 sm:px-8 sm:py-16 lg:py-24">
        <div tw="mb-8 sm:mb-9 lg:mb-10">
          <CategoryTag category={post.categories[0].title} />
          <h1 tw="pb-2 text-blueGray-900 text-5xl leading-tight mb-1">
            {post.title}
          </h1>
          <time
            dateTime={post.publishedAt}
            tw="py-1 text-blueGray-500 text-sm font-normal"
          >
            {format(new Date(post.publishedAt), `MMM d, yyyy`)}
          </time>
        </div>
        <div tw="mb-8 sm:mb-9 lg:mb-10">
          <figure>
            <Img
              tw="w-full h-96 mb-3"
              fluid={{ ...post.mainImage.asset.fluid, aspectRatio: 1 }}
              alt={post.alt}
            />
          </figure>
          <figcaption tw=" text-blueGray-500 italic sm:text-center">
            {post.mainImage.caption}
            {post.mainImage.imageCreditPhotographer &&
              post.mainImage.imageCreditUrl && (
                <span>
                  . Photographed by{" "}
                  <a
                    href={post.mainImage.imageCreditUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledLink>
                      {post.mainImage.imageCreditPhotographer}
                    </StyledLink>
                  </a>
                  .
                </span>
              )}
          </figcaption>
        </div>
        <div tw="py-4 text-blueGray-500">
          <PortableBlockContent blocks={post._rawBody} />
        </div>
        <div tw="border-t border-blueGray-200 px-0">
          <nav tw="-mt-px flex items-center justify-between">
            {prev && (
              <Link
                to={`${base}/${prev.slug.current}`}
                tw="flex flex-col border-t-2 pt-4 pr-1 inline-flex text-sm font-medium text-blueGray-500 hover:text-blueGray-800 hover:border-blueGray-400"
              >
                <span tw="text-blueGray-700 hover:text-blueGray-800 inline-flex items-center mb-2">
                  <HiArrowNarrowLeft tw="mr-3 h-5 w-5 text-blueGray-500" />
                  Previous
                </span>
                <span tw="hidden inline-block max-w-xs text-blueGray-500 text-sm font-normal sm:block">
                  {prev.title}
                </span>
              </Link>
            )}
            <div tw="-mt-px flex-1"></div>
            {next && (
              <Link
                to={`${base}/${next.slug.current}`}
                tw="flex flex-col items-end border-t-2 pt-4 pr-1 inline-flex text-sm font-medium text-blueGray-500 hover:text-blueGray-800 hover:border-blueGray-400"
              >
                <span tw="text-blueGray-700 hover:text-blueGray-800 inline-flex items-center mb-2">
                  Next
                  <HiArrowNarrowRight tw="ml-3 h-5 w-5 text-blueGray-500" />
                </span>
                <span tw="hidden inline-block max-w-xs text-blueGray-500 text-sm font-normal sm:block">
                  {next.title}
                </span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </Layout>
  )
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
      _createdAt
      _updatedAt
      publishedAt
      _rawBody
      categories {
        title
      }
      mainImage {
        imageCreditUrl
        imageCreditPhotographer
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
        caption
      }
    }
  }
`
