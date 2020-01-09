import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../sections/cover"
import Overview from "../sections/overview"
import Values from "../sections/values"
import Services from "../sections/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Appslab Company Profile" />
    <Overview/>
    <Values/>
    <Services/>
  </Layout>
)

export default IndexPage
