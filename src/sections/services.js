import React from "react"

import Quote from "../components/quote"

const Services = () => {
  return (
    <>
      <div className="section scrollable-section min-h-screen clearfix" id="services">
        <h1 className="section-title">Our Services</h1>
        <p className="paragraph">We aim to provide solutions by using existing technologies, we customize each solution according to the project’s needs. This doesn’t mean we reinvent the wheel, we just customize the wheel to your specifications. </p>
        <Quote quote="We don’t reinvent the wheel...we customize it to your specifications"/>
        <p></p>
      </div>
    </>
  )
}

export default Services
