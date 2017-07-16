import React from 'react';
import RadioButton from './../RadioButton/RadioButton';

export default function RadioButtonCollection(props) {
  let options = props.options.map((option, index) => {
    return (
      <RadioButton
        name={props.name}
        value={option}
        key={index}
        handleChange={props.handleChange}
        checked={props[props.name] === option}
      />
    );
  });
  return (
    <div className='radio-collection'>
      {options}
    </div>
  );
}
