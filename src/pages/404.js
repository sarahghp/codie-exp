import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Ack — this path doesn't seem to exist.</h1>
    <Link to='/'>↑ Go back home</Link>&nbsp;
  </Layout>
)

export default NotFoundPage
