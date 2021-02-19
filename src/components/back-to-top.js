import React from "react"
import { BsArrowUpShort } from "react-icons/bs"

const BackToTop = () => {
  const handleClick = e => {
    e.preventDefault()

    if (
      e.target.id === `arrow-up` ||
      e.target.id === `button-up` ||
      e.target.className.baseVal === `to-top-link` ||
      e.target.getAttribute(`d`) ===
        `M8 5.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z` ||
      e.target.getAttribute(`d`) ===
        `M7.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 5.707 5.354 8.354a.5.5 0 11-.708-.708l3-3z`
    ) {
      window.scroll({ top: 0, left: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="my-4 flex flex-col justify-center items-center mx-auto md:mt-24 md:mx-auto md:mb-8 ">
      <button
        id="button-up"
        className="to-top-link text-white bg-blue-500 rounded-full h-20 w-20 mb-4 shadow-md flex justify-center items-center cursor-pointer bg-transparent border-none transition-colors focus:outline-none focus:border-blueGray-700 md:hover:bg-blue-600 md:hover:shadow-lg md:active:bg-blue-700 md:active:shadow-2xl"
        onClick={handleClick}
      >
        <BsArrowUpShort id="arrow-up" className="w-full h-full" />
      </button>
      <p className="text-blueGray-500 text-opacity-100 uppercase font-semibold">
        Scroll to Top
      </p>
    </div>
  )
}

export default BackToTop
