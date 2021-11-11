import React, { Component } from "react";

class InputForm extends Component {
  ////inpuyvalue를 가져오는데  queryselector (dom)의 직접적인 요소에 접근하는것이 아니라 ref사용

  testRef = React.createRef();

  clickSubmit = (event) => {
    event.preventDefault();
    const name = this.testRef.current.value;
    name && this.props.onAdd(name);
    this.testRef.current.value = "";
  };
  render() {
    return (
      <form className="fromContainer" onSubmit={this.clickSubmit}>
        <input
          type="text"
          className="addInput"
          placeholder="입력"
          ref={this.testRef}
        />
        <button>입력</button>
      </form>
    );
  }
}

export default InputForm;
