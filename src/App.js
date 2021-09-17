import React from "react" 

class App extends React.Component {
  constructor(){
    console.log("hello")
  }
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

componentDidMount() {//컴포넌트 생명주기를 알아보기 위한 log
    console.log("Component rendered")
}
componentDidUpdate () {//컴포넌트 생명주기를 알아보기 위한 log
  console.log("I just updated")
}

  render() {
    console.log("I'm rendering")//컴포넌트 생명주기를 알아보기 위한 log
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