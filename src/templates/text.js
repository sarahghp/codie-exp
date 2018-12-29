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
      <NavFooter prev={post.frontmatter.prev} next={post.frontmatter.next} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        prev
        next
      }
    }
  }
`
