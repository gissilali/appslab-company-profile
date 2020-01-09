import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import MainNavigation from "./main-navigation"


class Layout extends React.Component {
  render() {
    return (
      <>
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 flex">
            <div className="px- flex items-center max-h-screen h-screen w-full md:w-4/12 lg:w-2/12">
              <MainNavigation />
            </div>
            <div className="px-4 w-full md:w-10/12 lg:w-8/12">
              <main>{ this.props.children }</main>
            </div>
          </div>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
