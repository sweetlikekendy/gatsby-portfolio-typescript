import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Source from "../components/source";
import { BlogIndex, Contact, Hero, Portfolio } from "../components/tailwind";
import { BlogPostQuery } from "../interfaces";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps extends PageProps {
  data: {
    posts: BlogPostQuery;
    site: {
      siteMetadata: {
        siteName: string;
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
    posts: allSanityPost(
      limit: 3
      sort: { fields: [publishedAt], order: [DESC] }
    ) {
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
    const { posts, site } = this.props.data;
    const { siteName } = site.siteMetadata;
    const { nodes: blogPostsArray } = posts;

    return (
      <Layout>
        <Hero />
        <Portfolio id="portfolio" />
        <BlogIndex blogPosts={blogPostsArray} />
        <Contact />
        {/* <h1>{this.hello} TypeScript world!</h1>
        <p>
          This site is named <strong>{siteName}</strong>
        </p>
        <Source description="Interested in details of this site?" /> */}
      </Layout>
    );
  }
}
