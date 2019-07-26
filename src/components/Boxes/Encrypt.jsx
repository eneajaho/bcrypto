import React from 'react'

const Encrypt = ({
  onInputChange,
  onKeyChange,
  onButtonSubmit,
  clearInput,
  input
}) => {
  return (
    <div>
      <div className="box">
        <span onClick={clearInput} type="button" className="clear-icon">
          <img src="clear.png" width="35px" height="auto" alt="" />
        </span>
        <span onClick={clearInput} type="button" className="change-icon">
          <img src="change.png" width="35px" height="auto" alt="" />
        </span>
        <div className="two-inputs">
          <input
            placeholder="Enter Text Here..."
            className="formStyle"
            type="text"
            onChange={onInputChange}
            value={input}
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
