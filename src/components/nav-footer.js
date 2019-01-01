import React from 'react'

const fsm = {
  'about-art': {
    next: '/sketches',
    prev: '/about-sarah'
  },
  'about-codie': {
    next: '/about-livecode',
    prev: '/films'
  },
  'about-livecode': {
    next: '/codie-live',
    prev: '/about-codie'
  },
  'about-sarah': {
    prev: '/',
    next: '/about-art'
  },
  'codie-live': {
    next: '/',
    prev: '/about-livecode'
  },
  'films': {
    next: '/about-codie',
    prev: '/sketches'
  },
  'index': {
    next: '/about-sarah'
  },
  'sketches': {
    next: '/films',
    prev: '/about-art'
  }
}

export const getLink = (dir, current) => {
  return fsm[current][dir]
}

const NavFooter = ({ current }) => {
  const prev = getLink('prev', current)
  const next = getLink('next', current)
  return (
    <h1
      style={{
        alignSelf: 'flex-start'
      }}>
      {prev && <a href={prev}>←</a>}&nbsp;
      <a href='/'>↑</a>&nbsp;
      {next && <a href={next}>→</a>}
    </h1>
  )
}

export default NavFooter
