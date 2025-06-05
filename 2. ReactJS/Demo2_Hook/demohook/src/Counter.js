import React, { useEffect, useState } from "react";

function Counter(props) {
  // Khai báo State count
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);

  //   Khai báo hàm handleClick
  let handleClick1 = () => {
    setCount1(count1 + 1);
  };

  let handleClick2 = () => {
    setCount2(count2 + 1);
  };

  // TH1
  //   useEffect(() => {
  //     console.log("useEffect 1 ...."); // Mounting, Updating
  //   });

  //   TH2
  //   useEffect(() => {
  //     console.log("useEffect 1 ...."); // Mounting
  //   }, []);

  //   TH3
  //   useEffect(() => {
  //     //
  //     //
  //     console.log("useEffect 1 ....");
  //     return () => {
  //       console.log("useEffect 2 ...."); // Gọi khi nào? unMouting
  //     };
  //   });

  //   TH4
  //     useEffect(() => {
  //       console.log("useEffect  ...."); // Mounting, Updating(count1)
  //     },[count1]);

  //     useEffect(() => {
  //       console.log("useEffect  ...."); // Mounting, Updating(count1)
  //     }, [count1, count2]);

  //   useEffect(() => {
  //     console.log("useEffect count1  ...."); // Mounting, Updating(count1)
  //   }, [count1]);

  //   useEffect(() => {
  //     console.log("useEffect count2  ...."); // Mounting, Updating(count1)
  //   }, [count2]);
  //
  return (
    <>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button type="button" class="btn btn-danger" onClick={handleClick1}>
            Click 1
          </button>
        </div>

        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          Bạn đã Click {count1} lần!!
        </div>
      </div>

      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button type="button" class="btn btn-danger" onClick={handleClick2}>
            Click 2
          </button>
        </div>

        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          Bạn đã Click {count2} lần!!
        </div>
      </div>
    </>
  );
}

export default Counter;
