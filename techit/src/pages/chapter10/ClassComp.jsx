import { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  componentWillMount() {
    // 컴포넌트가 생성될 때 실행된다. (렌더링 되기 이전)
    // 리액트가 업데이트되면서 더이상 사용이 권장되지 않는다.(componentDidMount 사용)
    console.log("componentWillMount");
  }

  componentDidMount() {
    // 마운트가 완료되고 나서 실행된다. (렌더링 이후)
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 상태 업데이트가 되고 컴포넌트가 업데이트 되기 전(렌더되기 전) 실행된다.
    // 초기 렌더링에서 발생하지 않는다.
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // UNSAFE_componentWillUpdate()로 변경되었다. (17버전까지는 사용 가능)
    // 초기 렌더링에서는 발생하지 않고, 그 이후 업데이트가 되고 나서 발생한다.
    console.log("componentWillUpdate");
  }

  componentDidUpdate(nextProps, nextState) {
    // 업데이트가 되고 나서 실행된다.
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // 컴포넌트가 제거되기 바로 직전에 실행된다.
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    console.log("render");

    return (
      <div>
        <button onClick={this.handleClick}>클릭!!</button>
        <span>{this.state.number}</span>
      </div>
    );
  }
}
export default ClassComp;
