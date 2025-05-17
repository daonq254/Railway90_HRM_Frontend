"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    // khai báo Contructor trong TypeScript
    function Person(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    // Trong TS không cho phép khai báo nhiều hàm contructor
    // constructor() {}
    // Khai báo phương thức
    Person.prototype.sayInfo = function () {
        console.log("Id: ", this.id);
        console.log("Name: ", this.name);
        console.log("Address: ", this.address);
    };
    /**
     * Getter $id
     * @return {number}
     */
    // public get $id(): number {
    //   return this.id;
    // }
    // /**
    //  * Getter $name
    //  * @return {string}
    //  */
    // public get $name(): string {
    //   return this.name;
    // }
    // /**
    //  * Getter $address
    //  * @return {string}
    //  */
    // public get $address(): string {
    //   return this.address;
    // }
    // /**
    //  * Setter $id
    //  * @param {number} value
    //  */
    // public set $id(value: number) {
    //   this.id = value;
    // }
    // /**
    //  * Setter $name
    //  * @param {string} value
    //  */
    // public set $name(value: string) {
    //   this.name = value;
    // }
    // /**
    //  * Setter $address
    //  * @param {string} value
    //  */
    // public set $address(value: string) {
    //   this.address = value;
    // }
    // Khai báo hàm getter
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    // Khai báo hàm setter
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    return Person;
}());
exports.default = Person;
