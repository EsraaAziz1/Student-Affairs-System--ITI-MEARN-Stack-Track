import { Courses } from "../Classes Modules/Courses.js";
import { Employee } from "../Classes Modules/Employee.js";
import { Instructors } from "../Classes Modules/Instructor.js";
import { Students } from "../Classes Modules/Student.js";
import {
  reanderCoursesData,
  reanderEmployeeData,
  reanderInstructorData,
  renderStudentData,
} from "../renderData.js";
import { update_Courses } from "./Edit.js";
let employee = new Employee();
let course = new Courses();
let Instructor = new Instructors();
let student = new Students();
let InstructorInfo = await Instructor.fetchData();
let EmployeeInfo = await employee.fetchData();
let CoursesInfo = await course.fetchData();
let StudentInfo = await student.fetchData();
let EntityTable = document.getElementsByClassName("EntityTable")[0];
let entity = document.querySelectorAll("li");

export function deleteStudentData() {
  EntityTable.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteStudent")) {
      let rowData = e.target.parentElement;
      let StdId = rowData.children[0].innerHTML;

      if (confirm("do you want to delete the Student")) {
        deleteStudent(StdId);
      } else {
        alert("Student wasn't deleted");
      }
    }
  });
}

export function deleteInstructorData() {
  EntityTable.addEventListener("click", function (e) {
    if (e.target.classList.contains("DeleteInstructor")) {
      let rowData = e.target.parentElement;
      let InsId = rowData.children[0].innerHTML;

      if (confirm("do you want to delete the Instructor")) {
        deleteInstructor(InsId);
        deleteCourseInstructor(InsId);
      } else {
        alert("Instructor wasn't deleted");
      }
    }
  });
}

export function deleteEmployeeData() {
  EntityTable.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteEmployee")) {
      let rowData = e.target.parentElement;
      let EmpId = rowData.children[0].innerHTML;

      if (confirm("do you want to delete the Employee")) {
        deleteEmployee(EmpId);
      } else {
        alert("Employee wasn't deleted");
      }
    }
  });
}

export function deleteCourseData() {
  EntityTable.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteCourse")) {
      let rowData = e.target.parentElement;
      let CrsId = rowData.children[0].innerHTML;

      if (confirm("do you want to delete the Course")) {
        deleteCourse(CrsId);
        deleteStudentCourses(CrsId);
      } else {
        alert("Course wasn't deleted");
      }
    }
  });
}

async function deleteStudent(StdId) {
  await fetch(`http://localhost:3000/students/${StdId}`, { method: "DELETE" });
  renderStudentData(StudentInfo, CoursesInfo, EmployeeInfo);
}

async function deleteStudentCourses(CrsId) {
  StudentInfo = StudentInfo.map((student) => {
    return {
      ...student,
      courses: student.courses.filter((course) => course !== CrsId),
    };
  });

  console.log(StudentInfo);

  await fetch("http://localhost:3000/students", {
    method: "PUT", // or PATCH (explained below)
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(StudentInfo),
  });
}

async function deleteInstructor(InsId) {
  await fetch(`http://localhost:3000/instructors/${InsId}`, {
    method: "DELETE",
  });
  reanderInstructorData(InstructorInfo);
}

async function deleteCourseInstructor(InsId) {
  CoursesInfo = CoursesInfo.map((course) => {
    return {
      ...course,
      instructorId: course.instructorId != InsId ? course.instructorId : 0,
    };
  });

  console.log(CoursesInfo);

  await fetch("http://localhost:3000/courses", {
    method: "PUT", // or PATCH (explained below)
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(CoursesInfo),
  });
}

async function deleteEmployee(EmpId) {
  await fetch(`http://localhost:3000/employees/${EmpId}`, {
    method: "DELETE",
  });
  reanderEmployeeData(EmployeeInfo);
}

async function deleteCourse(CrsId) {
  await fetch(`http://localhost:3000/courses/${CrsId}`, {
    method: "DELETE",
  });
  CoursesInfo = await course.fetchData();
  reanderCoursesData(CoursesInfo);
}
