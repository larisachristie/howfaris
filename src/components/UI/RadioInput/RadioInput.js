import React, { useState } from 'react';
import classes from './RadioInput.module.css';
import InfoBlock from '../InfoBlock/InfoBlock';

const RadioInput = props => {
  const [isVisible, setVisibility] = useState(false);
  let styling = [classes.RadioInput];
  if (props.currentChoice === props.radioInputLabel) {
    styling.push(classes.Selected);
  }
  return (
    <div
    onMouseEnter={() => setVisibility(true)}
    onMouseLeave={() => setVisibility(false)}>
      <div className={styling.join(' ')}>
        <label
        htmlFor={props.radioInputID.split(' ').join('')}
        onChange={(e) => props.changeHandler(e)}>
          <input
          type="radio"
          name={props.radioGroupName}
          id={props.radioInputID.split(' ').join('')}
          value={props.radioInputLabel}
          /><br />
          {props.radioInputLabel}
        </label>
      </div>
      {isVisible ? <InfoBlock text={props.entities} isHovering={true} /> : null}
    </div>
)};

export default RadioInput;