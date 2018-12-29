import React from 'react'
import { Link } from "gatsby"

const NavFooter = ({
  prev,
  next
}) => {
  return (
    <h1
      style={{
        alignSelf: 'flex-start'
      }}>
      {prev && <Link to={prev}>←</Link>}&nbsp;
      <Link to='/'>↑</Link>&nbsp;
      {next && <Link to={next}>→</Link>}
    </h1>
  )
}

export default NavFooter
