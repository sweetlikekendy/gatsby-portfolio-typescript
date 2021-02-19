import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { PrimaryButton } from "../../styles"

export default function TailwindHero() {
  const { desktopImage } = useStaticQuery(graphql`
    query {
      desktopImage: file(
        relativePath: { eq: "lucas-davies-uxIU0kYGu-k-unsplash w3000.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="max-w-6xl mx-auto relative bg-white overflow-hidden">
      <div
        className="relative h-full z-10 px-4 py-4 bg-white sm:py-16 md:py-20 lg:w-full lg:py-24 lg:px-8
        "
      >
        {/* <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"> */}
        <svg
          className=" z-10 hidden lg:block absolute right-1/2 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        {/* <div className="relative hidden px-4 sm:px-6 lg:px-8 lg:block lg:pt-4"></div> */}

        {/* <section className="mt-10 mx-auto sm:mt-12 md:mt-16"> */}
        <div className="w-full flex flex-col justify-between items-center lg:flex-row">
          <div className="max-w-lg mb-16 sm:mb-12 md:mb-10 lg:w-45% lg:mb-0 lg:w-full">
            <h1 className="text-4xl tracking-normal font-extrabold text-blueGray-900 sm:text-5xl">
              <span className="block xl:block">Hello, my name is</span>
              <span className="block text-blue-600 xl:inline">
                Kendy Nguyen
              </span>
            </h1>
            <p className="mt-3 text-base text-blueGray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I am a web developer based in San Diego, CA. My work experiences
              come from freelancing for small businesses. My goal is to help
              small businesses increase their online presence by building fast
              and responsive websites with a mobile-first mentality!
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
              <a
                href="mailto:kendyhnguyen1991@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryButton>Get in touch</PrimaryButton>
              </a>
            </div>
          </div>

          <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-1/2 lg:h-full">
            <Img
              fluid={{
                ...desktopImage.childImageSharp.fluid,
                aspectRatio: 4 / 3,
              }}
              alt="testing"
            />
          </div>
        </div>
        {/* </section> */}
      </div>
    </div>
  )
}
