import React, { Component } from 'react';

import classes from './App.module.css';
import Counter from '../components/Counter/Counter';


class App extends Component {
  state = {
    counterValue: 1,
    minValue: 1,
    maxValue: 100,
  }

  inputChangeHandler = ({ target: { value } }) => {
    if (value.length <= 2) {
      console.log(typeof value, value);
      const toNum = Number(value);
      console.log(typeof toNum, toNum);
      this.setState({
        counterValue: value,
      });
    }
  }

  buttonClickHandler = (event) => {

    // if (this.state.counterValue >= this.state.minValue && this.state.counterValue <= this.state.maxValue) {
    this.setState((prevState) => {
      return {
        counterValue: Number(prevState.counterValue) + 1,
      };
    });
    // }
  }

  render() {
    return (
      <div className={classes.App}>
        <Counter
          min={this.state.minValue}
          max={this.state.maxValue}
          counter={this.state.counterValue}
          changed={this.inputChangeHandler}
          clicked={this.buttonClickHandler}
        />
      </div>
    );
  }
}

export default App;
