import { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <p>지금까지 {this.state.count}번 클릭하셨습니다.</p>
        <button onClick={this.incrementCount}>클락하세요!</button>
      </div>
    );
  }
}

export default MyComponent;
