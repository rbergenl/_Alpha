import React from "react"
import ReactMarkdown from 'react-markdown'
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { HomePageQuery } from '../__generated__/HomePageQuery';

type PageContext = { title: string, text: string }
type HomePageProps = PageProps<HomePageQuery, PageContext>
 
const HomePage = ({ pageContext, data }: HomePageProps) => {

    return(
        <Layout>
          <SEO title="Home" canonical="http://www.myhomepage.com" /*also set hreflang */ />
          <ReactMarkdown source={ pageContext.text } />
          <h1>Hi people</h1>
          <p>
            This site is named <strong>{ data.site.siteMetadata.title }</strong>
          </p>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
          <a href="https://google.com" rel="external nofollow">Google</a>
        </Layout>
      )
}

export default HomePage

export const query = graphql`
    query HomePageQuery($id: IntQueryOperatorInput) {
      strapiPage(strapiId: $id) {
        slug
        translated_pages {
          slug
          lang
        }
      }
      site {
          siteMetadata {
            title
            author
            description
          }
      }
    }
`;
