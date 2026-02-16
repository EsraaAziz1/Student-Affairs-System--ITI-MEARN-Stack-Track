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

  getIDofInstructor(name, data) {
    for (let index = 0; index < data.length; index++) {
      if (data[index].name === name) return data[index].id;
    }
  }

  getIDCrsOfInstructor(dep, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].department === dep) return data[i].id;
    }
  }
}

// let ins1 = new Instructors();
// console.log(ins1.fetchData());
// console.log(ins1.getName_ofInstructor(1));

// let dataFetched = await ins1.fetchData()
// console.log(ins1.getIDofInstructor("Dr. Walid Saber" , dataFetched))
