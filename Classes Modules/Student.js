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
  duplicateID(id, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) throw new Error("duplicate IDs, please try again");
    }
    return id;
  }
  getStudentCourses(StudentInfo) {
    let CoursersData = [];
    for (let i = 0; i < StudentInfo.length; i++) {
      CoursersData.push(StudentInfo[i].courses);
    }
    return CoursersData;
  }
}
let std1 = new Students();
// console.log(std1.fetchData());
let stdData = await std1.fetchData();
console.log(std1.getStudentCourses(stdData));

// console.log(stdData[1].courses[0])