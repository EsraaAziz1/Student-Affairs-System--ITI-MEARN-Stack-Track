import { Students } from "./Student.js";

export class Courses extends Students {
  async fetchData() {
    return await fetch("http://localhost:3000/courses").then((res) => {
      return res.json();
    });
  }

  getNameofCoursesbyID(id, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) return data[i].title;
    }
  }
  getIdofCoursesbyTitle(title, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].title == title) return data[i].id;
    }
    throw new Error("Please select a Course");
  }
  duplicateID(id, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) throw new Error("duplicate IDs, please try again");
    }
    return id;
  }
}

let crs1 = new Courses();
// // console.log(crs1.fetchData());
// let std2 = new Students();
// let stdData = await std2.fetchData();
// console.log(std2)
// console.log(stdData)
// console.log(stdData[1].courses)
// console.log(crs1.getName_ofCourses());
// await crs1.CoursesName(stdData[1]);
// crs1.getName_ofCourses(3);
