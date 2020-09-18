import React from 'react';

import classes from './Counter.module.css';

const Counter = (props) => {
  return (
    <div className={classes.Counter}>
      <button>-</button>
      <input 
      type="number"
      min={props.min}
      max={props.max}
      value={props.counter}
      onChange={props.changed} 
      />
      <button onClick={props.clicked} >+</button>
    </div>
  );
};

export default Counter;