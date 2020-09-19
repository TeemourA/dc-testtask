import React from 'react';

import classes from './Counter.module.css';

const Counter = (props) => {
  const wheelHandler = () => {};

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="number"
        min={props.min}
        max={props.max}
        value={props.counter}
        onChange={props.changed}
        onWheel={wheelHandler}
      />
    </div>
  );
};

export default Counter;