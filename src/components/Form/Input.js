import React from 'react';
import classNames from "classnames";
import style from './Input.module.css';
import labelStyles from './Label.module.css'

function Input({type,placeholder,name,labelTitle,handleOnChange,value}){
  return(
    <>
        <label
            htmlFor={name}
            className={classNames(labelStyles.fieldLabel)}
        >
            {labelTitle}:
            <input
                required
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value}
                className={classNames(style.inputComponent)}
            />
        </label>
    </>
  )
}

export default Input