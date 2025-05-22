function hello(name) {
    if (name === void 0) { name = "user"; }
    console.log("Hello ".concat(name));
}
hello("Daonq"); // Hello Daonq
hello(); //  Hello user
function hello_2() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    console.log("Hello: ".concat(names));
}
hello_2("Minh");
hello_2("Minh", "Trung");
hello_2("Tiến Anh", "Trung", "Dũng");
