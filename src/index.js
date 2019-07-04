import React from 'react';
import { render } from 'react-dom';

import "./App.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }
    
  H2Ostate(temp) {
    if (temp <= 0) {
      return "ice";
    }

    if (100 <= temp) {
      return "steam";
    }

    return "water";
  }

  render() {
    const { temp } = this.state;

    return (
      <div className={this.H2Ostate(temp)}>
        <h2>phase: {this.H2Ostate(temp)}, {temp} 度</h2>
        <button onClick={this.onPlusButton}>+</button>
        <button onClick={this.onPlus10Button}>+10</button>
        <button onClick={this.onMinusButton}>-</button>
        <button onClick={this.onMinus10Button}>-10</button>
      </div>
    );
  }

  onPlusButton = () => {
    const { temp } = this.state;

    this.setState({ temp: temp + 1  });
  };

  onPlus10Button = () => {
    const { temp } = this.state;

    this.setState({ temp: temp + 10  });
  };

  onMinusButton = () => {
    const { temp } = this.state;

    this.setState({ temp: temp - 1  });
  };

  onMinus10Button = () => {
    const { temp } = this.state;

    this.setState({ temp: temp - 10  });
  };
}
render(<H2O />, document.getElementById("root"));
