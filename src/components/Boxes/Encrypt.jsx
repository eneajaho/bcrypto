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
            className="formStyle inputKey"
            type="text"
            onChange={onKeyChange}
          />
        </div>

        <button onClick={onButtonSubmit} type="button" className="btnStyle">
          Encrypt
        </button>
      </div>
    </div>
  )
}

export default Encrypt
