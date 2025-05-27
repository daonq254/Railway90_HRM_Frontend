import React from "react";
import "./TopComponent.css";

function TopComponent(props) {
  //
  // let divCss = { width: "200px", height: "300px", backgroundColor: "green" };
  // Khai báo hàm xử lý sự kiện khi click vào nút Click me
  let handleClick = () => {
    alert("Click Click Click!!!");
  };
  return (
    // <div style={divCss}>
    <div>
      <h1>Hello VTI</h1>
      <h2 className="h2Class">I am DaoNQ</h2>

      <button onClick={handleClick}>Click me!!</button>
    </div>
  );
}

export default TopComponent;
