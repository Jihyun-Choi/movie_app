import React from "react"
import PropTypes from "prop-types"

class App extends React.Component {
  state = {
    count: 0
  };
  //add와 minus는 자바스크립트!
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    // console.log("minus"); 이런 conole.log는 왜 하는거지?
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;