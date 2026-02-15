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
  getIdOfInstructorbyname(name, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name == name) return data[i].id;
    }
    throw new Error("please enter the Instructor Name correctly");
  }
  duplicateID(id, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) throw new Error("duplicate IDs, please try again");
    }
    return id;
  }
}

// let ins1 = new Instructors();
// console.log(ins1.fetchData());

// console.log(ins1.getName_ofInstructor(1));
