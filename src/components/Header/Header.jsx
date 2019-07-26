import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="bCrypt.png" alt="aa" />
      <div className="like-box">
        <a
          className="like-link"
          href="https://github.com/eneajaho/bcrypto"
          style={{
            color: 'white!important',
            textDecoration: 'none!important'
          }}
          rel="noopener noreferrer"
        >
          Liked it?
        </a>
      </div>
    </div>
  )
}
