import React, { useState } from 'react'
import {useFormContext} from "react-hook-form"
import "./errorMessage.scss";


const Input = (props) => {

  const [focused, setFocused] = useState(false)

  const handleFocus = (e)=>{
    setFocused(true)
  }
  return (
    <div className="mb-3">
      <label htmlFor="inputName" className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        name={props.name}
        value={props.value}
        onChange={(e) =>
          props.setToSend({ ...props.toSend, [e.target.name]: e.target.value })
        }
        required={true}
        pattern={props.pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
      ></input>
      <span>{props.errorMessage}</span>
    </div>
  );
  
};
 

export default Input