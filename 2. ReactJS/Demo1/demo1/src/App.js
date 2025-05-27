import "./App.css";
import React from "react";
import TopComponent from "./TopComponent";
import BottomCoponent from "./BottomCoponent";

function App() {
  //
  //
  return (
    <>
      <TopComponent />
      <BottomCoponent />
    </>
  );

  // return <h1>Hello VTI!!!</h1>;

  // return React.createElement("h1", null, "Hello VTI"); //<h1>Hello VTI</h1>;
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Hello VTI")
  // );

  // React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Hello VTI"),
  //   React.createElement("h2", null, "I am DAONQ")
  // );
  // <div>
  //   <h1>Hello VTI</h1>
  // </div>;

  // <div>
  //   <h1>Hello VTI</h1>
  // <h2>I am DAONQ</h2>
  // </div>;
  // createElement(tên thẻ,thuộc CSS cho thẻ,Nội dung trong thẻ)  ==> hỗ trợ tạo ra các thành phần trên giao diện html
}

export default App;
