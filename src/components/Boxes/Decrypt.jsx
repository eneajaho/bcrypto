import React from 'react'

const Decrypt = ({
  onInputChange,
  onKeyChange,
  onButtonSubmit,
  clearInput,
  changeType,
  input,
  keyC
}) => {
  return (
    <div>
      <div className="box">
        <span onClick={clearInput} type="button" className="clear-icon">
          <img src="clear.png" width="35px" height="auto" alt="" />
        </span>
        <span onClick={changeType} type="button" className="change-icon">
          <img src="change.png" width="35px" height="auto" alt="" />
        </span>
        <div className="two-inputs">
          <input
            placeholder="Enter Code Here..."
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
          Decrypt
        </button>
      </div>
    </div>
  )
}

export default Decrypt
