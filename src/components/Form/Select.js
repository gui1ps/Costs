import React from "react";
import labelStyles from "./Label.module.css";
import inputStyles from './Input.module.css'
import classNames from "classnames";

function Select({ name, labelTitle, handleOnChange, value, selectDisabledOption, listOfOption}) {
  return (
    <>
      <label htmlFor={name} className={classNames(labelStyles.fieldLabel)}>
        {labelTitle}:
        <select
          required
          className={classNames(inputStyles.inputComponent)}
          id={name}
          name={name}
          onChange={handleOnChange}
          value={value || ''}
        >
          <option value="" disabled>{selectDisabledOption}</option>
          {listOfOption.map((option)=>(<option value={option.id} key={option.id}>{option.name}</option>))}
        </select>
      </label>
    </>
  );
}

export default Select;
