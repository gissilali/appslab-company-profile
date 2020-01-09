import React from "react"
import Quote from "../components/quote"

const Cover = () => {
  return (
    <>
      <div className="section">
        <h1 className="text-6xl font-bold text-gray-900">Hi. We are Appslab</h1>
        <p className="paragraph">
          We are a mixture of developers and designers pushing boundaries of
          what’s possible in problem solving for businesses and communities, we
          have fun while at it. Bitch Please!!
        </p>

        <Quote
          quote="Creativity is intelligence having fun"
          author="Albert Einstein"
        ></Quote>
      </div>
    </>
  )
}

export default Cover
