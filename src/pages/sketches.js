import React from 'react'
import { Link } from 'gatsby'
import { Layout, NavFooter } from "../components"
import * as minimalVids from '../images/sketch-vids/minimal-index'
import * as medialVids from '../images/sketch-vids/medial-index'
import * as maximalVids from '../images/sketch-vids/maximal-index'
import * as posters from '../images/sketch-posters'

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
        {Object.entries(maximalVids).map(([posterPath, vid]) => {
          return (
            <video key={vid.toString()} src={vid} poster={posters[posterPath]} controls />
          )
        })}
        <hr />
        <h4>Minimal</h4>
        {Object.entries(minimalVids).map(([posterPath, vid]) => {
          return (
            <video key={vid.toString()} src={vid} poster={posters[posterPath]} controls />
          )
        })}
        <hr />
        <h4>Medial</h4>
        {Object.entries(medialVids).map(([posterPath, vid]) => {
          return (
            <video key={vid.toString()} src={vid} poster={posters[posterPath]} controls />
          )
        })}
        <NavFooter current='sketches' />
      </div>
    </Layout>
  )
}

export default Sketches
