import { Employee } from "./Employee.js";

export class Students extends Employee {
  async fetchData() {
    try {
      return await fetch("http://localhost:3000/students").then((response) => {
        return response.json();
      });
    } catch (error) {
      console.log("ERROR with catch", error);
    }
  }
}

let std1 = new Students();
console.log(std1.fetchData());
