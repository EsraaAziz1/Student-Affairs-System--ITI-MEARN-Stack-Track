import { Employee } from "./Employee.js";
import { Students } from "./Student.js";
import { Courses } from "./Courses.js";
import { Instructors } from "./Instructor.js";
import { searching_by_employee, searching_by_Student, searching_by_Instructor, searching_by_Courses } from "../Functional component/Search.js";
import { update_Employee , update_Instructor , update_Student , update_Courses} from '../Functional component/Edit.js';
import {
  reanderCoursesData,
  reanderEmployeeData,
  reanderInstructorData,
  renderStudentData,
} from "../renderData.js";

let employee = new Employee();
let EmployeeInfo = await employee.fetchData();

let Student = new Students();
let StudentInfo = await Student.fetchData();

let course = new Courses();
let coursesInfo = await course.fetchData();

let Instructor = new Instructors();
let InstructorInfo = await Instructor.fetchData();

let entity = document.querySelectorAll("li");
let EntityTable = document.querySelector(".EntityTable");
 

entity.forEach((ent) => {
    ent.addEventListener("click", function (e) {
        console.log(e.target.innerHTML);
        let showTableOfEntity = e.target.innerHTML;
        if (showTableOfEntity === "Employees") {

           reanderEmployeeData(EmployeeInfo);
            searching_by_employee(dataEmployee);
            update_Employee()

        } else if (showTableOfEntity === "Instructors") {

            EntityTable.innerHTML = "";
           reanderInstructorData(InstructorInfo);
            searching_by_Instructor(InstructorInfo);
            update_Instructor();

        } else if (showTableOfEntity === "Students") {

          reanderInstructorData(InstructorInfo);
            renderStudentData();
            searching_by_Student(StudentInfo, dataEmployee, dataCoures);
            update_Student()

        } else if (showTableOfEntity === "Courses") {

            EntityTable.innerHTML = "";
            reanderCoursesData(coursesInfo);
            searching_by_Courses(dataCoures, InstructorInfo);
            update_Courses();
        }
    });
});
