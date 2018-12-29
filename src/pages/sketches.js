import React from 'react'
import { Link } from 'gatsby'
import { Layout, NavFooter } from "../components"
import * as minimalVids from '../images/sketch-vids/minimal-index'
import * as medialVids from '../images/sketch-vids/medial-index'
import * as maximalVids from '../images/sketch-vids/maximal-index'

const Sketches = () => (
  <Layout>
    <div style={{
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    }}>
      <h2> 
        These are short snippets of my abstract works. 
        I recommend viewing fullscreen. <br /> <Link to='/films'> Or check out a full film with music.</Link>
      </h2>
      <hr />
      <h4>Maximal</h4>
      {Object.values(maximalVids).map((vid) => {
        return (
          <video src={vid} width='50%' controls />
        )
      })}
      <hr />
      <h4>Minimal</h4>
      {Object.values(minimalVids).map((vid) => {
        return (
          <video src={vid} width='50%' controls />
        )
      })}
      <hr />
      <h4>Medial</h4>
      {Object.values(medialVids).map((vid) => {
        return (
          <video src={vid} width='50%' controls />
        )
      })}
      <NavFooter prev='/about-art' next='/films' />
    </div>
  </Layout>
)

export default Sketches
