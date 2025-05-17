export default abstract class Person {
  private id: number;
  private name: string;
  private address: string;
  // khai báo Contructor trong TypeScript
  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  // Trong TS không cho phép khai báo nhiều hàm contructor
  // constructor() {}
  // Khai báo phương thức
  sayInfo(): void {
    console.log("Id: ", this.id);
    console.log("Name: ", this.name);
    console.log("Address: ", this.address);
  }
  // Phương thức chung cho tất cả các lớp con
  public abstract goToVTI();

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
  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  // Khai báo hàm setter
  public setId(id: number) {
    this.id = id;
  }
  public setName(name: string) {
    this.name = name;
  }
  public setAddress(address: string) {
    this.address = address;
  }
  //
}
