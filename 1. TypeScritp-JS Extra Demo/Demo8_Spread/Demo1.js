var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Khai báo mảng
var nameRailway_90 = ["Trung", "Thanh", "Dũng"];
// Pass học phần ReactJS + "Nam", "Tùng", "Duy" ==> Mock2501
// let mock2501 = ["Trung", "Thanh", "Dũng", "Nam", "Tùng", "Duy"];
var mock2501 = __spreadArray(__spreadArray([], nameRailway_90, true), ["Nam", "Tùng", "Duy"], false);
console.log(mock2501);
