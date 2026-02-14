import { Courses } from "./Courses.js";

export class Instructors extends Courses {
  async fetchData() {
    try {
      return await fetch("http://localhost:3000/instructors").then(
        (response) => {
          return response.json();
        },
      );
    } catch (error) {
      console.log("ERROR with catch", error);
    }
  }
  getNameOfInstructor(id, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) return data[i].name;
    }
  }
}

// let ins1 = new Instructors();
// console.log(ins1.fetchData());

// console.log(ins1.getName_ofInstructor(1));
