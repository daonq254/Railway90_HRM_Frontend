let myname = "daonq"; // Phạm vi toàn cục, global scope
//
//
//
console.log("myname: ", myname);

function f1() {
  //
  //
  console.log("myname_f1: ", myname);
  let a_f1 = 10;
  console.log("a_f1: ", a_f1);
}

//
//
// console.log(a_f1);

function f2() {
  //
  //
  let b_f2 = 40;
  console.log("myname_f2: ", myname);
  console.log("b_f2: ", b_f2);
  //   console.log("x: ", x);

  //
  function f2_1() {
    //
    console.log("b_f2: ", b_f2);
    let x = 10;
    console.log("x: ", x);

    function f2_1_1() {
      //
      console.log("b_f2: ", b_f2);
      console.log("x: ", x);
    }
  }
}
let a = 10;
if (a >= 11) {
  // ...
  // ..
  let a_if = 20;
  console.log(a_if);
}

// console.log(a_if);

f1();
f2();
