import React, { Component } from "react";
import { DataContext } from "../Context/DataContext";

class TopChildComponent extends Component {
  render() {
    let { dataToTopChild } = this.props;
    let dataFromContext = this.context;
    return (
      <div>
        This is TopChild Component!!
        <h3>{dataToTopChild}</h3>
        <h4>DataContext TopChild:{dataFromContext.data1} </h4>
      </div>
    );
  }
}

TopChildComponent.contextType = DataContext;

export default TopChildComponent;
