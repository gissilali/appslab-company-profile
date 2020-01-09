import React from "react"

const Quote = ({ quote, author }) => {
  return (
    <>
      <div className="max-w-sm my-8 relative">
        <div className="h-2 w-16 bg-gray-900 mb-4"></div>
        <span className="text-gray-300 absolute z-10">
          <svg
          className="w-24 h-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="197.699"
            height="160.651"
            viewBox="0 0 52.308 42.505"
          >
            <path
              d="M17.381 0C5.437 5.601 0 15.075 0 26.03c0 2.719.494 7.414 2.883 11.121 2.06 3.213 5.025 5.354 9.967 5.354 5.849 0 10.791-4.53 10.791-10.79 0-6.756-4.942-10.792-10.79-10.792-2.39 0-4.614.906-6.261 2.225-.33-.99-.494-2.06-.494-3.543 0-6.59 5.93-13.674 12.85-16.557zm28.666 0c-11.944 5.601-17.38 15.075-17.38 26.03 0 2.719.494 7.414 2.882 11.121 2.06 3.213 5.107 5.354 9.968 5.354 5.93 0 10.79-4.53 10.79-10.79 0-6.756-4.86-10.792-10.79-10.792-2.389 0-4.53.906-6.26 2.225-.33-.99-.495-2.06-.495-3.543 0-6.59 5.93-13.674 12.85-16.557z"
              fill="currentColor"
            />
          </svg>
        </span>
        <div className="relative pt-4 pl-4 z-30">
          <h1 className="text-3xl font-serif font-bold text-gray-900">
            {quote}
          </h1>
          <p className="text-right italic text-lg font-serif">{author}</p>
        </div>
      </div>
    </>
  )
}

export default Quote
