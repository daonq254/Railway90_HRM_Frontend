// import React from "react";
// import TopComponent from "./Components/TopComponent";
// import BottomComponent from "./Components/BottomComponent";

// function App(props) {
//   let dataToTop = "HelloVTI Academy";
//   let dataToTop1 = "HelloVTI Academy 1";
//   let dataToTop2 = { id: 1, name: "daonq" };
//   let headingTop = "............Component TOP..............";

//   let dataToTop3 = "VTI Academy From APP To Bottom";
//   let headingBottom = "............Component Bottom..............";

//   let data = "";
//   // Khai báo hàm callback
//   let getDataFromTop = (dataParam) => {
//     console.log("getDataFromTop: .....");
//     console.log("dataParam: ", dataParam);

//     data = dataParam;
//   };

//   return (
//     <>
//       <TopComponent
//         dataToTop={dataToTop}
//         dataToTop1={dataToTop1}
//         dataToTop2={dataToTop2}
//         headingTop={headingTop}
//         onGetDataFromTop={getDataFromTop}
//       />
//       <BottomComponent
//         dataToTop3={dataToTop3}
//         headingBottom={headingBottom}
//         data={data}
//       />
//     </>
//   );
// }

// export default App;
// rcc
import React, { Component } from "react";
import TopComponent from "./Components/TopComponent";
import BottomComponent from "./Components/BottomComponent";

class App extends Component {
  //
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: "",
    };
  }

  // Khai báo hàm callback
  getDataFromTop = (dataParam) => {
    console.log("getDataFromTop: .....");
    console.log("dataParam: ", dataParam);
    this.setState({
      data: dataParam,
    });
  };
  render() {
    let dataToTop = "HelloVTI Academy";
    let dataToTop1 = "HelloVTI Academy 1";
    let dataToTop2 = { id: 1, name: "daonq" };
    let headingTop = "............Component TOP..............";

    let dataToTop3 = "VTI Academy From APP To Bottom";
    let headingBottom = "............Component Bottom..............";

    return (
      <>
        <TopComponent
          dataToTop={dataToTop}
          dataToTop1={dataToTop1}
          dataToTop2={dataToTop2}
          headingTop={headingTop}
          onGetDataFromTop={this.getDataFromTop}
        />
        <BottomComponent
          dataToTop3={dataToTop3}
          headingBottom={headingBottom}
          data={this.state.data}
        />
      </>
    );
  }
}

export default App;
