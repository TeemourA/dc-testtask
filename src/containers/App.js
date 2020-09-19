import React, { Component } from 'react';

import classes from './App.module.css';
import Counter from '../components/Counter/Counter';


class App extends Component {
  state = {
    counterValue: 1,
    counterChangeStep: 1,
    minValue: 1,
    maxValue: 100,

    data: {
      appTitle: 'Counter App',
      info: 'Test task for DomClick',
      author: 'https://github.com/TeemourA'
    }
  }

  changeHandler = ({ target: { value } }) => {
    if (Number(value) <= this.state.minValue || !value.length) {
      this.setState({
        counterValue: this.state.minValue,
      });
    } else if (Number(value) >= this.state.maxValue) {
      this.setState({
        counterValue: this.state.maxValue,
      });
    } else {
      this.setState({ counterValue: Number(value) });
    }
  }

  buttonClickHandler = ({ target: { id } }) => {
    if (id === 'minus') {
      this.setState((prevState) => {
        const nextValue = Number(prevState.counterValue) - this.state.counterChangeStep;

        if (nextValue <= this.state.minValue) {
          return {
            counterValue: this.state.minValue,
          };
        } else {
          return {
            counterValue: nextValue,
          };
        }
      });
    } else {
      this.setState((prevState) => {
        const nextValue = Number(prevState.counterValue) + this.state.counterChangeStep;

        if (nextValue >= this.state.maxValue) {
          return {
            counterValue: this.state.maxValue,
          };
        } else {
          return {
            counterValue: nextValue,
          };
        }
      });
    }
  }

  render() {
    return (
      <div className={classes.App}>
        <h1 className={classes.App__title}>{this.state.data.appTitle}</h1>

        <div className={classes.container}>
          <button id="minus" className={`${classes.button} ${classes.button_substraction}`} onClick={this.buttonClickHandler}>-</button>

          <Counter
            min={this.state.minValue}
            max={this.state.maxValue}
            counter={this.state.counterValue}
            changed={this.changeHandler}
          />

          <button id="plus" className={`${classes.button} ${classes.button_addition}`} onClick={this.buttonClickHandler}>+</button>
        </div>

        <p>
          {this.state.data.info} by <a href={this.state.data.author} target="blank">Timur Ahmedov</a>
        </p>

      </div>
    );
  }
}

export default App;
