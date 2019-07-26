import React from 'react'

const Encrypt = ({
  onInputChange,
  onKeyChange,
  onButtonSubmit,
  clearInput,
  changeType,
  input,
  keyC,
  type
}) => {
  return (
    <div className="box">
      {/* <h1> {type} </h1> */}
      <span onClick={clearInput} type="button" className="clear-icon">
        <img src="clear.png" width="35px" height="auto" alt="" />
      </span>
      <span onClick={changeType} type="button" className="change-icon">
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
          value={keyC}
          onChange={onKeyChange}
        />
      </div>

      <button onClick={onButtonSubmit} type="button" className="btnStyle">
        {type}
      </button>
    </div>
  )
}

export default Encrypt
