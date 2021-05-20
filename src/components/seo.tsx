/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
export interface SEOProps {
  description: string;
  lang?: string;
  meta?: [];
  title: string;
  image?: string;
}

export default function SEO({ description = ``, lang = `en`, meta = [], title = ``, image = `` }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata?.description;
  const metaImage = image || site.siteMetadata?.image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata?.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `title`,
          property: `og:title`,
          content: title,
        },
        {
          name: `description`,
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `image`,
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta)}
    />
  );
}
