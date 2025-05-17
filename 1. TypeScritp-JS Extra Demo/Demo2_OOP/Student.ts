import Person from "./Person";

class Student extends Person {
  private classVTI: string;
  private testScore: number;

  constructor(
    id: number,
    name: string,
    address: string,
    classVTI: string,
    testScore: number
  ) {
    super(id, name, address);
    this.classVTI = classVTI;
    this.testScore = testScore;
  }

  public goToVTI() {
    console.log("Student go to VTI!!!");
  }
  //   public sayInfoStudent(): void {
  //     console.log("id: ", super.getId());
  //     console.log("name: ", super.getName());
  //     console.log("address: ", super.getAddress());

  //     console.log("classVTI: ", this.classVTI);
  //     console.log("testScore: ", this.testScore);
  //   }
  public sayInfoStudent(): void {
    super.sayInfo();
    console.log("classVTI: ", this.classVTI);
    console.log("testScore: ", this.testScore);
  }

  //
}

export { Student };
