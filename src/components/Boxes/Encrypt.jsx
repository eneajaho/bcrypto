import React from 'react'

const Encrypt = ({ onInputChange, onKeyChange, onButtonSubmit }) => {
  return (
    <div>
      <div className="box">
        <div className="two-inputs">
          <input
            placeholder="Enter Text Here..."
            className="formStyle"
            type="text"
            onChange={onInputChange}
          />
          <input
            placeholder="Key..."
            className="formStyle"
            type="text"
            onChange={onKeyChange}
            style={{ width: '80px' }}
          />
        </div>

        <button onClick={onButtonSubmit} type="button" className="btnStyle">
          Check
        </button>
      </div>
    </div>
  )
}

export default Encrypt
