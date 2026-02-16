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
  EntityTable.innerHTML = `<div class="header" style="grid-template-columns: 10px repeat(4, 1fr);">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Role</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3></div>`;
  document.getElementsByClassName("header")[0].style.opacity = 1;
  for (let index = 0; index < EmployeeInfo.length; index++) {
    EntityTable.innerHTML += `
                    <div class="content" style="grid-template-columns: 10px repeat(4, 1fr);">
                        <p>${EmployeeInfo[index].id}</p>
                        <p>${EmployeeInfo[index].name}</p>
                        <p>${EmployeeInfo[index].role}</p>
                        <input type="button" value="Edit" class ="edit">
                        <input type="button" value="Delete" class="deleteEmployee">
                    </div>`;
  }
}

function reanderInstructorData(InstructorInfo) {
  EntityTable.innerHTML = `<div class="header" style="grid-template-columns: 10px repeat(4, 1fr);">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Department</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>`;
  document.getElementsByClassName("header")[0].style.opacity = 1;
  for (let index = 0; index < InstructorInfo.length; index++) {
    EntityTable.innerHTML += `
                    <div class="content" style="grid-template-columns: 10px repeat(4, 1fr);">
                        <p>${InstructorInfo[index].id}</p>
                        <p>${InstructorInfo[index].name}</p>
                        <p>${InstructorInfo[index].department}</p>
                        <input type="button" value="Edit" class ="edit">
                        <input type="button" value="Delete" class="DeleteInstructor">
                    </div>`;
  }
}
function renderStudentData(StudentInfo, coursesInfo, EmployeeInfo) {
  EntityTable.innerHTML = `<div class="header" style="grid-template-columns: 10px repeat(6, 2fr);">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Email</h3>
                            <h3>Courses</h3>
                            <h3>Advisor Name</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3></div>`;
  document.getElementsByClassName("header")[0].style.opacity = 1;
  for (let i = 0; i < StudentInfo.length; i++) {
    EntityTable.innerHTML += `
    <div class="content" style="grid-template-columns: 10px repeat(6, 2fr);">
    <p>${StudentInfo[i].id}</p>
        <p>${StudentInfo[i].name}</p>
        <p>${StudentInfo[i].email}</p>
        <p>
          <select name="course">
            <option value="default">Courses</option>
            ${Coursesloop(StudentInfo[i], coursesInfo)}
          </select>
        </p>
       ${EmployeeValidation(StudentInfo[i], EmployeeInfo)}
        <input type="button" class="edit" value="Edit"/>
        <input type="button" class="deleteStudent" value="Delete"/>
        </div>`;
  }
}
function reanderCoursesData(coursesInfo) {
  EntityTable.innerHTML = `<div class="header" style="grid-template-columns: 10px repeat(5, 1fr)">
                            <h3>ID</h3>
                            <h3>Title</h3>
                            <h3>Credit Hours</h3>
                            <h3>Instructor Name</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>`;
  document.getElementsByClassName("header")[0].style.opacity = 1;
  for (let index = 0; index < coursesInfo.length; index++) {
    EntityTable.innerHTML += `<div class="content" style="grid-template-columns: 10px repeat(5, 1fr);">
                        <p>${coursesInfo[index].id}</p>
                        <p>${coursesInfo[index].title}</p>
                        <p>${coursesInfo[index].creditHours}</p>
                        ${InstructorValidation(coursesInfo[index], InstructorInfo)}
                        <input type="button" value="Edit"  class ="edit">
                        <input type="button" value="Delete" class ="deleteCourse"> </div>`;
  }
}

function Coursesloop(index, coursesInfo) {
  let option = "";
  for (let j = 0; j < index.courses.length; j++) {
    if (
      course.getNameofCoursesbyID(index.courses[j], coursesInfo) != undefined
    ) {
      option += ` <option value="course${j}">
      ${course.getNameofCoursesbyID(index.courses[j], coursesInfo)}
    </option>`;
    }
  }
  return option;
}

function InstructorValidation(index, InstructorInfo) {
  let instructor = Instructor.getNameOfInstructor(
    index.instructorId,
    InstructorInfo,
  );
  if (instructor != undefined) {
    return `<p>${instructor}</p>`;
  } else {
    return `<p>no Instructor Assigned</p>`;
  }
}

function EmployeeValidation(index, EmployeeInfo) {
  let Employee = employee.getNameOfEmployee(index.advisorId, EmployeeInfo);
  if (Employee != undefined) {
    return ` <p>${Employee}</p>`;
  } else {
    return `<p>no Employee Assigned</p>`;
  }
}

export {
  reanderCoursesData,
  reanderEmployeeData,
  reanderInstructorData,
  renderStudentData,
};
