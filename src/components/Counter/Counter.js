import React from 'react';

import classes from './Counter.module.css';

const Counter = (props) => {
  return (
    <div className={classes.container}>
      <button id="minus" className={classes.button} onClick={props.clicked}>-</button>
      <input 
      className={classes.input}
      type="number"
      min={props.min}
      max={props.max}
      value={props.counter}
      onChange={props.changed}
      />
      <button id="plus" className={classes.button} onClick={props.clicked}>+</button>
    </div>
  );
};

export default Counter;