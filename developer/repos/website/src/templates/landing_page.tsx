import React from "react"
import Layout from "../components/layout"
export default function LandingPage({ pageContext }) {
  return (
    <Layout>
      <div>Hello landing page : { pageContext.text }</div>
    </Layout>
  )
}
