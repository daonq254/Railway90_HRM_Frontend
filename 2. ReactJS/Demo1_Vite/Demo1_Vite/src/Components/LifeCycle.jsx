import React, { Component } from "react";

class LifeCycle extends Component {
  // Hàm contructor
  constructor(props, context) {
    super(props, context);
    console.log("1. constructor");
    this.state = {
      message: "Hello VTI",
    };
  }
  //   Khai báo hàm handleChangeState
  handleChangeState = () => {
    this.setState({ message: "Hello Railway_90" });
  };

  // Hàm render
  render() {
    console.log("2. render");

    return (
      <>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleChangeState}>Change State</button>
      </>
    );
  }

  componentDidMount() {
    console.log("3. componentDidMount");
    // Call API
  }

  componentDidUpdate() {
    console.log("4. componentDidUpdate");
  }

  //
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default LifeCycle;
