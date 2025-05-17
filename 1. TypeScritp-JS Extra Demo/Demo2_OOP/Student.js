"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, address, classVTI, testScore) {
        var _this = _super.call(this, id, name, address) || this;
        _this.classVTI = classVTI;
        _this.testScore = testScore;
        return _this;
    }
    //   public sayInfoStudent(): void {
    //     console.log("id: ", super.getId());
    //     console.log("name: ", super.getName());
    //     console.log("address: ", super.getAddress());
    //     console.log("classVTI: ", this.classVTI);
    //     console.log("testScore: ", this.testScore);
    //   }
    Student.prototype.sayInfoStudent = function () {
        _super.prototype.sayInfo.call(this);
        console.log("classVTI: ", this.classVTI);
        console.log("testScore: ", this.testScore);
    };
    return Student;
}(Person_1.default));
exports.Student = Student;
