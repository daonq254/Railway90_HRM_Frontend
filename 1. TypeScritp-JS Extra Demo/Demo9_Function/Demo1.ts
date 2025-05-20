// Khai báo hàm tính tổng 2 số trong JS
// Cách 1: Khai báo truyền thống
function sum(a: number, b: number) {
  return a + b;
}
console.log("Cách 1");

console.log(`Tổng 2 số là: ${sum(10, 15)}`);

// Cách 2: Tạo 1 biến tham chiếu tới 1 hàm
let v_sum = function (a: number, b: number) {
  return a + b;
};
console.log("Cách 2");

console.log(`Tổng 2 số là: ${v_sum(20, 15)}`);

// Cách 3: Sử dụng hàm mũi tên, arrow function
// let v_sum_arrow = (a: number, b: number) => {
//   let result = 10;
//   //
//   //
//   return a + b;
// };

let v_sum_arrow = (a, b) => a + b;

console.log("Cách 3");

console.log(`Tổng 2 số là: ${v_sum_arrow(30, 20)}`);
