import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ctc = {
  color: '#8a1ae3',
  fontSize: '16px',
  marginTop: '30px',
  marginBottom: '-40px'
}

const Result = ({ result }) => {
  return result !== '' ? (
    <CopyToClipboard text={result}>
      <div className="result-box">
        <div className="result-text">{result}</div>
        <div style={ctc}>Click text to copy!</div>
      </div>
    </CopyToClipboard>
  ) : (
    ''
  )
}

export default Result
