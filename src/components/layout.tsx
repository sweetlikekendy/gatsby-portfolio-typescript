import * as React from "react"
import { Global, css } from "@emotion/react"
import "twin.macro"
import { Header, Footer } from "./tailwind"
import { ChildrenProps } from "../interfaces"

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Global
        styles={css`
          html {
            position: relative;
            box-sizing: border-box;
          }

          body {
            line-height: 1.6;
            letter-spacing: 0.025em;
            font-family: "Ubuntu", sans-serif;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Roboto", Arial;
            color: hsl(0, 0%, 0%);
            letter-spacing: 0.025em;
          }
        `}
      />

      <div tw="flex bg-blue-900 p-4 text-white uppercase text-center">
        <div tw="max-w-6xl flex mx-auto flex items-center">
          <p tw="text-sm">
            If you notice anything not working or out of place, that is because my website is currently undergoing some
            changes
          </p>
        </div>
      </div>

      {/* FLex in a column and have the main content grow to keep the footer always at the bottom of the page */}
      <div tw="flex flex-col min-h-screen">
        <Header />
        <main tw="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
