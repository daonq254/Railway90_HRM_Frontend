import { myName } from "./Person";

import Person from "./Person";

var person1 = new Person();
person1.id = 1;
person1.name = "daonq1";
person1.address = "HN";

var person2 = new Person();
person2.id = 2;
person2.name = "daonq2";
person2.address = "ND";
//
console.log("Thông tin của person1: ");
console.log("ID: ", person1.id);
console.log("Name: ", person1.name);
console.log("Address: ", person1.address);

console.log("--------------------------------");
console.log("Thông tin của person2: ");
console.log("ID: ", person2.id);
console.log("Name: ", person2.name);
console.log("Address: ", person2.address);

console.log("MyName: ", myName);
