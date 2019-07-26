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
    <div>
      <div className="box result-box">
        <CopyToClipboard text={result}>
          <div className="result-text">{result}</div>
        </CopyToClipboard>
        <div style={ctc}>Click text to copy!</div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Result
