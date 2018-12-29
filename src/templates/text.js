import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(data);
  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <h1
        style={{
          alignSelf: 'flex-start'
        }}>
        {post.frontmatter.prev && <Link to={post.frontmatter.prev}>←</Link>}&nbsp;
        <Link to='/'>↑</Link>&nbsp;
        {post.frontmatter.next && <Link to={post.frontmatter.next}>→</Link>}
      </h1>
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
