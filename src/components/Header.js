import React from 'react'
import { Link } from 'gatsby'


const Header = () => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      {
        <Link
          style={{
            textDecoration: 'none',

          }}
          to={'/'}
        ><h2>Rory Green</h2>
        </Link>
      }
    </div>
  )
}

export default Header
