import * as React from "react";
import { Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StyledLink } from "../styles";

const Error404Page: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="max-w-6xl mx-auto relative overflow-hidden my-auto px-4 py-8 sm:px-8 lg:py-24 ">
      <div className="text-blueGray-500 text-base">
        <h2 className="text-blueGray-800 text-6xl mb-5">Page not found!</h2>
        <p className="text-2xl mb-10">
          Sorry, but the page you were looking for could not be found.
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
          if you can't find what you're looking for.
        </p>
      </div>
    </section>
  </Layout>
);

export default Error404Page;
