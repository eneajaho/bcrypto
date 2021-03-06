import React from 'react'

const footerText = {
  display: 'flex',
  justifyContent: 'center',
  color: 'white',
  fontSize: '16px',
  textAlign: 'center',
  padding: '25px 0 15px 0'
}

export default function Header() {
  return (
    <div style={footerText}>
      Made with ❤ by{' '}
      <a href="https://eneajaho.me" rel="noopener noreferrer" id="en">
        {' '}
        Enea
      </a>
    </div>
  )
}
