import React, { Component } from 'react';

import classes from './App.module.css';
import Counter from '../components/Counter/Counter';


class App extends Component {
  state = {
    counterValue: 1,
    counterChangeStep: 1,
    minValue: 1,
    maxValue: 1000,
  }

  changeHandler = ({ target: { value } }) => {
    if (Number(value) <= this.state.minValue) {
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
        return {
          counterValue: Number(prevState.counterValue) - this.state.counterChangeStep,
        }
      });
    } else {
      this.setState((prevState) => {
        return {
          counterValue: prevState.counterValue + this.state.counterChangeStep,
        }
      });
    }
  }

  render() {
    return (
      <div className={classes.App} >
        <Counter
          min={this.state.minValue}
          max={this.state.maxValue}
          counter={this.state.counterValue}
          changed={this.changeHandler}
          clicked={this.buttonClickHandler}
        />
      </div>
    );
  }
}

export default App;
