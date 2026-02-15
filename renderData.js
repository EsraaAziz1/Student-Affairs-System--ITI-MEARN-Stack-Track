import { Employee } from "./Classes Modules/Employee.js";
import { Courses } from "./Classes Modules/Courses.js";
import { Students } from "./Classes Modules/Student.js";
import { Instructors } from "./Classes Modules/Instructor.js";

let employee = new Employee();
let course = new Courses();
let Instructor = new Instructors();
let InstructorInfo = await Instructor.fetchData();

let EntityTable = document.querySelector(".EntityTable");

function reanderEmployeeData(EmployeeInfo) {
  EntityTable.innerHTML = `<div class="header">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Role</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3></div>`;
  for (let index = 0; index < EmployeeInfo.length; index++) {
    EntityTable.innerHTML += `
                    <div class="content">
                        <p>${EmployeeInfo[index].id}</p>
                        <p>${EmployeeInfo[index].name}</p>
                        <p>${EmployeeInfo[index].role}</p>
                        <input type="button" value="Edit" class ="edit">
                        <input type="button" value="Delete" class="delete">
                    </div>`;
  }
}

function reanderInstructorData(InstructorInfo) {
  EntityTable.innerHTML = `<div class="header">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Department</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>`;
  for (let index = 0; index < InstructorInfo.length; index++) {
    EntityTable.innerHTML += `
                    <div class="content">
                        <p>${InstructorInfo[index].id}</p>
                        <p>${InstructorInfo[index].name}</p>
                        <p>${InstructorInfo[index].department}</p>
                        <input type="button" value="Edit" class ="edit">
                        <input type="button" value="Delete" class="delete">
                    </div>`;
  }
}
function renderStudentData(StudentInfo, coursesInfo, EmployeeInfo) {
  EntityTable.innerHTML = `<div class="header">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Email</h3>
                            <h3>Courses</h3>
                            <h3>Advisor Name </h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3></div>`;
  for (let i = 0; i < StudentInfo.length; i++) {
    EntityTable.innerHTML += `
    <div class="content">
    <p>${StudentInfo[i].id}</p>
        <p>${StudentInfo[i].name}</p>
        <p>${StudentInfo[i].email}</p>
        <p>
          <select name="course" >
            <option value="default">Courses</option>
            <option value="course1">${course.getNameofCoursesbyID(StudentInfo[i].courses[0], coursesInfo)}</option>
            <option value="course2">${course.getNameofCoursesbyID(StudentInfo[i].courses[1], coursesInfo)}</option>
            <option value="course3">${course.getNameofCoursesbyID(StudentInfo[i].courses[2], coursesInfo)}</option>
          </select>
        </p>
        <p>${employee.getNameOfEmployee(StudentInfo[i].advisorId, EmployeeInfo)}</p>
        <input type="button" class="edit" value="Edit"/>
        <input type="button" class="delete" value="Delete"/>
        </div>`;
  }
}
function reanderCoursesData(coursesInfo) {
  EntityTable.innerHTML = `<div class="header">
                            <h3>ID</h3>
                            <h3>title</h3>
                            <h3>Credit Hours</h3>
                            <h3>Instructor Name</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>`;
  for (let index = 0; index < coursesInfo.length; index++) {
    EntityTable.innerHTML += `<div class="content">
                        <p>${coursesInfo[index].id}</p>
                        <p>${coursesInfo[index].title}</p>
                        <p>${coursesInfo[index].creditHours}</p>
                        <p>${Instructor.getNameOfInstructor(coursesInfo[index].instructorId, InstructorInfo)}</p>
                        <input type="button" value="Edit"  class ="edit">
                        <input type="button" value="Delete" class ="delete"> </div>`;
  }
}

export {
  reanderCoursesData,
  reanderEmployeeData,
  reanderInstructorData,
  renderStudentData,
};
