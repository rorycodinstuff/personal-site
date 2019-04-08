import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm } from './../utils/typography'
import contactData from './../data/contact'

export class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: rhythm(6),
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            textDecoration: 'none'
          }}
        >
        <Link style={{textDecoration: 'none' }} to={'/portfolio'}>Work</Link>
         {/* <Link style={{textDecoration: 'none' }} to={'/portfolio'}>Work</Link> */}
         {/* <Link style={{textDecoration: 'none' }} to={'/journey'}>Journey</Link> */}
          <Link style={{textDecoration: 'none' }} to={'/contact'}>Contact</Link>
          <Link style={{textDecoration: 'none' }} to={'/blog'}>Blog</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
