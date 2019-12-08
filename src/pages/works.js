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
      <NavFooter current='films' />
    </Layout>
  )
}

const Works = () => {
  return (
    <Layout>
      Pull this data from images index eventually
      <h4>Digital Conglomerate</h4>
      <p><em>install and film — outside scren at Denver Digerati then inside</em></p>
      
      <h4>Make Manifest</h4>
      <p><em>wipes, videos, screens</em></p>
      
      <h4>Jets to Codie</h4>
      <p><em>install and clips from currents app, maybe one/two full films — </em></p>
      
      <h4>Homage to Aldo</h4>
      <p><em>install and clips from currents app, maybe one/two full films — </em></p>
      
      <h4>Summer ’91</h4>
      <p><em>install and clips from currents app, maybe one/two full films — </em></p>

      
      
      <NavFooter current='works' />
    </Layout>
  )
}

export default Works
