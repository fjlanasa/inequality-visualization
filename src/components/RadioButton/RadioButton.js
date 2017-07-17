import React from 'react';
import './RadioButton.css';
import metricKey from './../../metricKey';

export default function RadioButton(props) {
  let text = metricKey[props.value].formatted_label;
  return (
    <label>
      <input type='radio' name={props.name} value={props.value} checked={props.checked} onChange={props.handleChange} />
      <div>
        <p>{text}</p>
      </div>
    </label>
  );
}
