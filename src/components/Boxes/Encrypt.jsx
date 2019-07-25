import React from 'react'

const Encrypt = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <div className="box">
        <input
          placeholder="Enter Text Here..."
          className="formStyle"
          type="text"
          onChange={onInputChange}
        />
        <button onClick={onButtonSubmit} type="button" className="btnStyle">
          Check
        </button>
      </div>
    </div>
  )
}

export default Encrypt
