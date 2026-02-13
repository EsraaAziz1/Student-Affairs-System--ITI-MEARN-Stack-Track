export class Employee {
  //  #id=0;
  // constructor(id , name , role){
  //    this.id = id;
  //    this.name = name;
  //    this.role = role;
  // }
  // set Id(idValue){
  //     this.#id = idValue++;
  // }
  // get Id(){
  //     return this.#id;
  // }
  async fetchData() {
    try {
      return await fetch("http://localhost:3000/employees").then((response) => {
        return response.json();
      });
    } catch (error) {
      console.log("ERROR with catch", error);
    }
  }
}
// let emp1 = new Employee()
// console.log(emp1.fetchData())
