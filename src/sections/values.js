import React from "react"

const Values = () => {
  return (
    <div className="scrollable-section min-h-screen clearfix" id="our-values">
      <div className="section">
        <h2 className="section-title">Our Values</h2>
        <div className="flex mb-8">
          <div className="sm:w-full md:w-2/12">
            <h3 className="text-gray-900 font-bold">Our Mission</h3>
          </div>
          <div className="sm:w-full md:w-10/12">
            <p className="paragraph pl-8">
              To provide creative, innovative & high quality solutions by
              prioritizing customer satisfaction, nurturing talent, providing
              solutions for sustainable economy and working with the community.{" "}
            </p>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="sm:w-full md:w-2/12">
            <h3 className="text-gray-900 font-bold">Our Vision</h3>
          </div>
          <div className="sm:w-full md:w-10/12">
            <p className="paragraph pl-8">
              Apps:Lab has a vision to become the leading solution provider in
              Eastern Africa, through developing innovative and creative cutting
              edge solutions with quality as required of a leader and to be the
              first choice of any business/ company/individual as their Data and
              Technology Partner
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Values;