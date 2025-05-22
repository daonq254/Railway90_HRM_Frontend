// Bạn hãy xây dựng 1 chương trình tính toán
// Tính tổng 2 số
function sum(a, b) {
    return a + b;
}
// Tính hiệu 2 số
function minus(a, b) {
    return a - b;
}
// Tính phép nhân 2 số
function multiply(a, b) {
    return a * b;
}
// Khai báo ra hàm calculate
function calculate(a_param, b_param, function_param) {
    var v_result = function_param(a_param, b_param); // sum(a_param,b_param)
    return v_result;
}
// Sử dụng
// let resultSum = sum(10, 20);
// let resultMinus = sum(30, 20);
// let resultMultiply = sum(10, 20);
var resultSum = calculate(10, 20, sum);
var resultMinus = calculate(30, 20, minus);
var resultMultiply = calculate(10, 20, multiply);
console.log("resultSum: ".concat(resultSum));
console.log("resultMinus: ".concat(resultMinus));
console.log("resultMultiply: ".concat(resultMultiply));
