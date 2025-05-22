function hello(name: String = "user") {
  console.log(`Hello ${name}`);
}

hello("Daonq"); // Hello Daonq

hello(); //  Hello user

function hello_2(...names) {
  console.log(`Hello: ${names}`);
}

hello_2("Minh");
hello_2("Minh", "Trung");
hello_2("Tiến Anh", "Trung", "Dũng");
hello_2("Tiến Anh", "Trung", "Dũng", "Ngọc thanh", "Phan Dũng");
