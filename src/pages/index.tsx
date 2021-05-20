import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { BlogIndex, Contact, Hero, Portfolio } from "../components/tailwind";
import { BlogPostQuery } from "../interfaces";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps extends PageProps {
  data: {
    seoImage: {
      childImageSharp: {
        fluid: {
          src: string;
        };
      };
    };
    posts: BlogPostQuery;
    site: {
      siteMetadata: {
        siteName: string;
        image: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
    seoImage: file(relativePath: { eq: "lucas-davies-uxIU0kYGu-k-unsplash w3000.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    posts: allSanityPost(limit: 3, sort: { fields: [publishedAt], order: [DESC] }) {
      totalCount
      nodes {
        _createdAt
        _updatedAt
        publishedAt
        title
        description
        slug {
          current
        }
        categories {
          title
        }
        mainImage {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps> {
  readonly hello = `Hello`;
  public render() {
    const { posts, site, seoImage } = this.props.data;
    const { childImageSharp } = seoImage;
    const { fluid } = childImageSharp;
    const { src } = fluid;
    const { siteName } = site.siteMetadata;
    const { nodes: blogPostsArray } = posts;

    return (
      <Layout>
        <SEO title={siteName} description="Kendy Nguyen's Portfolio" image={src} />
        <Hero />
        <Portfolio id="portfolio" />
        <BlogIndex blogPosts={blogPostsArray} />
        <Contact />
      </Layout>
    );
  }
}
