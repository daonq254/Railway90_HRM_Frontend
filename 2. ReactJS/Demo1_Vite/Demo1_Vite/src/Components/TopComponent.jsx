import React, { Component } from "react";
import TopChildComponent from "./TopChildComponent";

class TopComponent extends Component {
  // Khai báo state click_number
  constructor(props) {
    super(props);
    //  Nên khai báo các State ở trong hàm này
    this.state = {
      inputData: "",
      // click_number: 0,
      // myName: "daonq",
    };
  }

  // click_number = 0;
  dataFromTopToBottom = "Something data From Top To Bottom";
  // Khai báo hàm handleClick
  handleClick = () => {
    console.log("InputData: ", this.state.inputData);

    this.props.onGetDataFromTop(this.dataFromTopToBottom);
    // this.setState({
    //   click_number: this.state.click_number + 1,
    // });
    // console.log("click_number: ", this.click_number);
    // this.render();
  };

  // Khai báo hàm handleChange
  handleChange = (event) => {
    // console.log("Event: ", event.target.value);
    this.setState({
      inputData: event.target.value,
    });
  };

  render() {
    // let dataToTop = this.props.dataToTop;
    // let dataToTop1 = this.props.dataToTop1;
    // let dataToTop2 = this.props.dataToTop2;
    // Destructuring
    let { dataToTop, dataToTop1, dataToTop2, headingTop, dataToTopChild } =
      this.props;

    // console.log("dataToTop: ", dataToTop);
    // console.log("dataToTop1: ", dataToTop1);
    // console.log("dataToTop2: ", dataToTop2);
    return (
      <>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">{headingTop}</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    {/* Ô nhập liệu  */}
                    <input
                      type="text"
                      name="Input_Name"
                      id="input"
                      className="form-control"
                      required="required"
                      value={this.state.inputData}
                      onChange={this.handleChange}
                      // value={this.state.click_number}
                    />
                  </div>

                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={this.handleClick}
                    >
                      Sent Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TopChild */}
        <TopChildComponent dataToTopChild={dataToTopChild} />
      </>
    );
  }
}

export default TopComponent;
