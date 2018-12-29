import React from 'react'
import { Link } from 'gatsby'
import { Layout, NavFooter } from "../components"

const Films = () => {
  return (
    <Layout>
      <h2> 
        Codie's first film, with more to come. 
        <br /> <Link to='/sketches'> Or check out some sketches.</Link>
      </h2>
      <iframe title='tangara' src="https://player.vimeo.com/video/282159597" width="960" height="541" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      <NavFooter next='/about-codie' prev='/sketches' />
    </Layout>
  )
}

export default Films
