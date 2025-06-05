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
import { DataContext } from "./Context/DataContext";
import LifeCycle from "./Components/LifeCycle";

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
    //
    let dataToTopChild = "Data from App To TopChild";

    let data1 = "Nam, Xuân, Hồng, ...";
    let data2 = "A, B, C, D, E, ...";
    let data3 = "This is data From App to Top_Child";
    let account = {
      id: 1,
      email: "daonq@viettel.com.vn",
      username: "daonq",
      fullname: "NguyenDao",
    };

    let sentObject = {
      data1: data1,
      data2: data2,
      data3: data3,
      account: account,
    };

    return (
      <>
        {/* <DataContext.Provider value={sentObject}>
          <TopComponent
            dataToTop={dataToTop}
            dataToTop1={dataToTop1}
            dataToTop2={dataToTop2}
            headingTop={headingTop}
            onGetDataFromTop={this.getDataFromTop}
            dataToTopChild={dataToTopChild}
          />
        </DataContext.Provider>
        <BottomComponent
          dataToTop3={dataToTop3}
          headingBottom={headingBottom}
          data={this.state.data}
        /> */}
        <LifeCycle />
      </>
    );
  }
}

export default App;
