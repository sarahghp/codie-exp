import React from 'react'
import { Link } from 'gatsby'
import { Layout, NavFooter } from "../components"
import * as minimalVids from '../images/sketch-vids/minimal-index'
import * as medialVids from '../images/sketch-vids/medial-index'
import * as maximalVids from '../images/sketch-vids/maximal-index'
import * as posters from '../images/sketch-posters'

const posterPath = (rawPath) => {
  // these shenanigans because gatsby builds production sites
  // outside a browser environment
  let vidPath;
  
  if (typeof window === 'undefined') {
    vidPath = rawPath
  } else {
    vidPath = (new URL(rawPath)).pathname
  }
  return posters[vidPath.split(/\/|\.|-/)[2]]
}

const Sketches = () => {

  return (
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
            <video key={vid.toString()} src={vid} poster={posterPath(vid)} controls />
          )
        })}
        <hr />
        <h4>Minimal</h4>
        {Object.values(minimalVids).map((vid) => {
          return (
            <video key={vid.toString()} src={vid} poster={posterPath(vid)} controls />
          )
        })}
        <hr />
        <h4>Medial</h4>
        {Object.values(medialVids).map((vid) => {
          return (
            <video key={vid.toString()} src={vid} poster={posterPath(vid)} controls />
          )
        })}
        <NavFooter current='sketches' />
      </div>
    </Layout>
  )
}

export default Sketches
