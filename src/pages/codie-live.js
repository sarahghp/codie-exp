import React from 'react'
import { Layout, NavFooter } from "../components"
import codieSPR from '../images/codieSPR.mp4'

const LiveCodie = () => {
  return (
    <Layout>
      <h2> 
        Some footage from earlier this year. 
        <br /> <a href='https://instagram.com/hi_codie/'> Or see more clips on Instagram.</a>
      </h2>
      <video src={codieSPR} controls />
      <NavFooter next='/' prev='/about-livecode' />
    </Layout>
  )
}

export default LiveCodie
