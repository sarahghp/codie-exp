import React from 'react'
import { Layout, NavFooter } from '../components'
import * as vids from '../images/live-vids'

const LiveCodie = () => {
  return (
    <Layout>
      <h2> 
        Some footage from earlier this year. 
        <br /> <a href='https://instagram.com/hi_codie/'> Or see more clips on Instagram.</a>
      </h2>
      {Object.values(vids).map((vid) => {
        return (
          <video key={vid.toString()} src={vid} controls />
        )
      })}
      <NavFooter current='codie-live' />
    </Layout>
  )
}

export default LiveCodie
