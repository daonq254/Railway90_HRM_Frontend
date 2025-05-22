// Bạn hãy xây dựng 1 chương trình tính toán
// Tính tổng 2 số
function sum(a: number, b: number) {
  return a + b;
}
// Tính hiệu 2 số
function minus(a: number, b: number) {
  return a - b;
}
// Tính phép nhân 2 số
function multiply(a: number, b: number) {
  return a * b;
}
// Khai báo ra hàm calculate
// calculate: được gọi là Higher Order Function(Hàm cấp cao)
//             Nhận 1 hàm khác làm tham số đầu vào
function calculate(a_param, b_param, function_param) {
  let v_result = function_param(a_param, b_param); // sum(a_param,b_param)

  return v_result;
}

// Sử dụng
// let resultSum = sum(10, 20);
// let resultMinus = sum(30, 20);
// let resultMultiply = sum(10, 20);

let resultSum = calculate(10, 20, sum);
let resultMinus = calculate(30, 20, minus);
let resultMultiply = calculate(10, 20, multiply);

console.log(`resultSum: ${resultSum}`);
console.log(`resultMinus: ${resultMinus}`);
console.log(`resultMultiply: ${resultMultiply}`);
