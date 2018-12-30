import React from "react"
import { graphql } from "gatsby"
import { Layout, NavFooter } from "../components"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <NavFooter current={post.frontmatter.current} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        current
      }
    }
  }
`
