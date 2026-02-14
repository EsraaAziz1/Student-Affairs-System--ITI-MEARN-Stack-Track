import { Students } from "./Student.js";

export class Courses extends Students {
  async fetchData() {
    return await fetch("http://localhost:3000/courses").then((res) => {
      return res.json();
    });
  }

  getName_ofCourses(id, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) return data[i].title;
    }
  }

  //    async  CoursesName(stdArray){
  //    await stdArray.forEach((std)=>{
  //           let crsStd = std.courses;
  //           console.log(crsStd)
  //         //   console.log(this)
  //            crsStd.forEach(async (Idcrs)=>{
  //               await this.getName_ofCourses(Idcrs)

  //           })
  //     })
  // }
  // async CoursesName(student) {
  //   let crsStd = student.courses;
  //   console.log(crsStd);
  //   crsStd.forEach(async (Idcrs) => {
  //     await this.getName_ofCourses(Idcrs);
  //   });
  // }
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
