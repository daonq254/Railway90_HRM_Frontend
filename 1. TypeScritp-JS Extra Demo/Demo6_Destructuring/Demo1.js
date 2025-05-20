var person = {
    id: 1,
    name: "daonq",
    gender: "male",
};
// tách riêng các thuộc tính của đối tượng person và lưu trữ vào các biến
// let v_id = person.id;
// let v_name = person.name;
// let v_gender = person.gender;
// console.log("v_id: ", v_id);
// console.log("v_name: ", v_name);
// console.log("v_gender: ", v_gender);
// Destructuring với object
var v_id = person.id, v_name = person.name, v_gender = person.gender;
// let { id, name, gender } = person; // id = person.id, name = person.name
// let { name: v_name } = person;
// let { gender: v_gender } = person;
console.log("v_id: ", v_id);
console.log("v_name: ", v_name);
console.log("v_gender: ", v_gender);
//
// Sử dụng với mảng
var nameRailway90 = ["Trung", "Thanh", "Dũng"];
// let v_0 = nameRailway90[0];
// let v_1 = nameRailway90[1];
// let v_2 = nameRailway90[2];
// Destructuring với mảng;
var v_0 = nameRailway90[0], v_1 = nameRailway90[1], v_2 = nameRailway90[2];
console.log("v_0: ", v_0);
console.log("v_1: ", v_1);
console.log("v_2: ", v_2);
