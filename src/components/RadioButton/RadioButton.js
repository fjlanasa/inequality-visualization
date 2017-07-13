import React from 'react';
import './RadioButton.css';

export default function RadioButton(props) {
  return (
    <label>
      <input type='radio' name={props.name} value={props.value} checked={props.checked} onChange={props.handleChange} />
      <div>
        {props.value}
      </div>
    </label>
  );
}
