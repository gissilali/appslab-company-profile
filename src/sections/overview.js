import React from "react"
import Quote from "../components/quote"
import Cover from './cover'

const Overview = () => {
  return (
    <div className="scrollable-section min-h-screen clearfix" id="overview">
    <Cover/>
      <div className="section">
        <h2 className="section-title">Overview</h2>
        <p className="paragraph">
          Apps:Lab Co was found in 2014 with three pillars in mind, innovation,
          creativity and community. We seek to solve problems with the most
          innovative methods, in the most creative ways and in a way that will
          benefit our community of customers, developers, designers, analysts
          and learners. We would like you to think of us as an extension of your
          business.{" "}
        </p>
        <Quote
          quote="...nurturing talent,
providing solutions for
sustainable economy
and working with the
community. "
        />
      </div>
    </div>
  )
}

export default Overview
