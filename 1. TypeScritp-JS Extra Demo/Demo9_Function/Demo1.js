// Khai báo hàm tính tổng 2 số trong JS
// Cách 1: Khai báo truyền thống
function sum(a, b) {
    return a + b;
}
console.log("Cách 1");
console.log("T\u1ED5ng 2 s\u1ED1 l\u00E0: ".concat(sum(10, 15)));
// Cách 2: Tạo 1 biến tham chiếu tới 1 hàm
var v_sum = function (a, b) {
    return a + b;
};
console.log("Cách 2");
console.log("T\u1ED5ng 2 s\u1ED1 l\u00E0: ".concat(v_sum(20, 15)));
// Cách 3: Sử dụng hàm mũi tên, arrow function
var v_sum_arrow = function (a, b) {
    return a + b;
};
console.log("Cách 3");
console.log("T\u1ED5ng 2 s\u1ED1 l\u00E0: ".concat(v_sum_arrow(30, 20)));
