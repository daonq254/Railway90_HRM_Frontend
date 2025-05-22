var numberArray = [1, 6, 5, 3, 9];
// Yêu cầu: Bạn hãy tạo ra 1 mảng mới có các phần tử bằng phần tử mảng bên trên + 5 đơn vị
var numberArray_New = [];
numberArray.forEach(function (num) {
    var number_new = num + 5;
    numberArray_New.push(number_new);
});
console.log("numberArray_New: ".concat(numberArray_New));
// Sử dụng hàm map
var numberArray_New_Map = numberArray.map(function (number, index) {
    //
    //
    return number + 5;
});
console.log("numberArray_New_Map: ".concat(numberArray_New_Map));
