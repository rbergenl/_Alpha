import React from "react"
import Layout from "../components/layout"
export default function Page({ pageContext }) {
  return (
    <Layout>
      <div>Hello info page full width: { pageContext.text }</div>
    </Layout>
  )
}
