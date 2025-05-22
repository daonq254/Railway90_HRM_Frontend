// Viết 1 hàm có 1 tham số đầu vào, tăng giá trị của tham số đầu vào này lên 5 đơn vị
function plus5(y) {
    return y + 5;
}
// Viết 1 hàm có 1 tham số đầu vào, tăng giá trị của tham số đầu vào này lên 10 đơn vị
function plus10(y) {
    return y + 10;
}
// plus
// function plus(x: number, y: number) {
//   return y + x;
// }
function plus(x) {
    return function plus_x(y) {
        return y + x;
    };
}
// Sử dụng
// Tăng 5 đơn vị
var plus_5 = plus(5);
// ==> let plus_5 = plus_x(y){return y +5}
// plus_5(10); // 10 + 5
console.log(" plus_5(10): ".concat(plus_5(10)));
// plus_5(30); // 10 + 5
console.log(" plus_5(30): ".concat(plus_5(30)));
//
var plus_20 = plus(20);
console.log(" plus_20(10): ".concat(plus_20(10)));
console.log(" plus_20(100): ".concat(plus_20(100)));
