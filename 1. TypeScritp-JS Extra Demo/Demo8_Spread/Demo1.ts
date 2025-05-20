// Khai báo mảng
let nameRailway_90 = ["Trung", "Thanh", "Dũng"];

// Pass học phần ReactJS + "Nam", "Tùng", "Duy" ==> Mock2501

// let mock2501 = ["Trung", "Thanh", "Dũng", "Nam", "Tùng", "Duy"];
let mock2501 = [...nameRailway_90, "Nam", "Tùng", "Duy"];
console.log(mock2501);

// Sử dụng với Object
let person = {
  id: 1,
  name: "daonq",
  gender: "male",
};

// let person_new = {
//   id: 1,
//   name: "daonq",
//   gender: "male",
//   address: "HN",
//   age: 19,
// };

// Sử dụng ... với đối tượng
let person_new = { ...person, address: "HN", age: 19 };

console.log("person_new: ", person_new);
