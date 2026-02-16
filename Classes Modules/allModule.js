import { Employee } from "./Employee.js";
import { Students } from "./Student.js";
import { Courses } from "./Courses.js";
import { Instructors } from "./Instructor.js";
import {
  searching_by_employee,
  searching_by_Student,
  searching_by_Instructor,
  searching_by_Courses,
} from "../Functional component/Search.js";
import {
  reanderCoursesData,
  reanderEmployeeData,
  reanderInstructorData,
  renderStudentData,
} from "../renderData.js";
import {
  getHeaderStudentData,
  getHeaderCourseData,
  getHeaderInstructorData,
  getHeaderEmployeeData,
} from "../Functional component/Sort.js";
let employee = new Employee();
let EmployeeInfo = await employee.fetchData();

let Student = new Students();
let StudentInfo = await Student.fetchData();

let course = new Courses();
let coursesInfo = await course.fetchData();

let Instructor = new Instructors();
let InstructorInfo = await Instructor.fetchData();
let flag = false;
let entity = document.querySelectorAll("li");
let EntityTable = document.querySelector(".EntityTable");
let headerTable = document.getElementsByClassName("header")[0];
entity.forEach((ent) => {
  ent.addEventListener("click", function (e) {
    console.log(e.target.innerHTML);
    let showTableOfEntity = e.target.innerHTML;
    if (showTableOfEntity === "Employees") {
      reanderEmployeeData(EmployeeInfo);
      searching_by_employee(EmployeeInfo);
      getHeaderEmployeeData(EntityTable, flag);
    } else if (showTableOfEntity === "Instructors") {
      EntityTable.innerHTML = "";
      reanderInstructorData(InstructorInfo);
      searching_by_Instructor(InstructorInfo);
      getHeaderInstructorData(EntityTable, flag);
    } else if (showTableOfEntity === "Students") {
      EntityTable.innerHTML = "";
      renderStudentData(StudentInfo, coursesInfo, EmployeeInfo);
      searching_by_Student(StudentInfo, EmployeeInfo, coursesInfo);
      getHeaderStudentData(EntityTable, flag);
    } else if (showTableOfEntity === "Courses") {
      EntityTable.innerHTML = "";
      reanderCoursesData(coursesInfo);
      searching_by_Courses(coursesInfo, InstructorInfo);
      getHeaderCourseData(EntityTable, flag);
    }
  });
});
