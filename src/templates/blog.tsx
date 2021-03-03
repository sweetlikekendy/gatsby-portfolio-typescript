import React, { useState } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import "twin.macro";
import SEO from "../components/seo";
import { StyledLink } from "../styles";
import {
  BlogPaginationNav,
  BlogPreview,
  SearchBar,
  SearchResults,
} from "../components/tailwind";

import { Categories, ImageProps, PageContext } from "../interfaces";

export const unflattenResults = (results: StoreFromQuery[]) =>
  results.map((post) => {
    const { slug, title } = post;
    return { slug, frontmatter: { title } };
  });

export interface Post {
  categories: Categories[];
  description: string;
  mainImage: ImageProps;
  publishedAt: string;
  slug: { current: string };
  title: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface StoreFromQuery {
  author: string;
  category: string;
  description: string;
  publishedAt: string;
  slug: string;
  text: any[] | any;
  title: string;
}

export interface LocalSearchPages {
  index: string;
  store: StoreFromQuery;
}

export interface BlogProps {
  data: {
    posts: {
      nodes: Post[];
      totalCount: number;
    };
    localSearchPages: LocalSearchPages;
  };
  pageContext: {
    base: string;
    next: PageContext;
    prev: PageContext;
    slug: string;
    postsPerPage: number;
    currentPage: number;
    skip: number;
    category: string;
  };
}

export default function Blog({ data, pageContext }: BlogProps) {
  console.log(data, pageContext);
  const { posts, localSearchPages } = data;
  const { totalCount: totalNumOfPosts, nodes: blogPostsArray } = posts;
  const { index, store } = localSearchPages;
  const { category, postsPerPage, currentPage, skip, base } = pageContext;

  // Search related vars
  const { search } = typeof window !== "undefined" && window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");

  const results = useFlexSearch(searchQuery, index, store);
  const searchedPosts = searchQuery ? unflattenResults(results) : posts;

  console.log(blogPostsArray);

  return (
    <Layout>
      <SEO title="Blog Posts" />
      <div className="max-w-6xl mx-auto p-4 sm:px-8 sm:py-16 lg:py-24">
        <div tw="relative">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SearchResults results={results} />
        </div>
        <section>
          {totalNumOfPosts === 0 ? (
            <div className="text-blueGray-500 text-base">
              <h2 className="text-blueGray-800 text-6xl mb-5">
                No blogs have been written just yet!
              </h2>
              <p className="text-2xl mb-10">
                Sorry, but I have not written any blog posts. Stay tuned for
                upcoming blog posts!
              </p>
              <p className="text-2xl">
                You can
                <Link to="/">
                  <StyledLink> return to the home page, </StyledLink>
                </Link>
                or{" "}
                <a
                  href="mailto:kendyhnguyen1991@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledLink>contact me</StyledLink>
                </a>{" "}
                if you have any questions.
              </p>
            </div>
          ) : (
            <div className="my-0 grid gap-16 py-12 sm:my-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              {blogPostsArray.map((post) => (
                // <pre>{JSON.stringify(post.mainImage.asset.fluid, null, 2)}</pre>
                <BlogPreview
                  key={post.title}
                  category={post.categories[0].title}
                  title={post.title}
                  description={post.description}
                  createdAt={post._createdAt}
                  slug={`${post.slug.current}`}
                  imageSrc={post.mainImage.asset.fluid}
                  imageAlt={post.mainImage.alt}
                />
              ))}
            </div>
          )}
        </section>
        <BlogPaginationNav
          postsPerPage={postsPerPage}
          totalCount={posts.totalCount}
          currentPage={currentPage}
          skip={skip}
          base={base}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
  # query PostQuery($category: String, $skip: Int, $postsPerPage: Int) {
  query PostQuery($skip: Int, $postsPerPage: Int) {
    localSearchPages {
      index
      store
    }
    posts: allSanityPost(
      # filter: {
      #   categories: { elemMatch: { slug: { current: { eq: $category } } } }
      # }
      limit: $postsPerPage
      skip: $skip
      sort: { fields: [publishedAt], order: [DESC] }
    ) {
      totalCount
      nodes {
        # feature
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
