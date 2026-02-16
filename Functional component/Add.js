import { Courses } from "../Classes Modules/Courses.js";
import { Instructors } from "../Classes Modules/Instructor.js";
import { Students } from "../Classes Modules/Student.js";
import { Employee } from "../Classes Modules/Employee.js";
let employee = new Employee();
let employeeInfo = await employee.fetchData();
let student = new Students();
let studentInfo = await student.fetchData();
let course = new Courses();
let courseInfo = await course.fetchData();
let instructor = new Instructors();
let instructorInfo = await instructor.fetchData();

let mainSelect = document
  .getElementsByClassName("entity")[0]
  .getElementsByTagName("select")[0];
let studentDiv = document.getElementsByClassName("StudentForm")[0];
let InstructorDiv = document.getElementsByClassName("InstructorForm")[0];
let CourseDiv = document.getElementsByClassName("CourseForm")[0];
let EmployeeDiv = document.getElementsByClassName("EmployeeForm")[0];

mainSelect.addEventListener("change", function () {
  if (mainSelect.value == "Student") {
    EmployeeDiv.style.display = "none";
    studentDiv.style.display = "block";
    CourseDiv.style.display = "none";
    InstructorDiv.style.display = "none";
  } else if (mainSelect.value == "Employee") {
    EmployeeDiv.style.display = "block";
    studentDiv.style.display = "none";
    CourseDiv.style.display = "none";
    InstructorDiv.style.display = "none";
  } else if (mainSelect.value == "Instructor") {
    EmployeeDiv.style.display = "none";
    studentDiv.style.display = "none";
    CourseDiv.style.display = "none";
    InstructorDiv.style.display = "block";
  } else if (mainSelect.value == "Course") {
    EmployeeDiv.style.display = "none";
    studentDiv.style.display = "none";
    CourseDiv.style.display = "block";
    InstructorDiv.style.display = "none";
  } else {
    EmployeeDiv.style.display = "none";
    studentDiv.style.display = "none";
    CourseDiv.style.display = "none";
    InstructorDiv.style.display = "none";
  }
});

studentDiv
  .getElementsByClassName("savedata")[0]
  .addEventListener("click", function () {
    addStudentData();
    location.href = "../studentAffairs.html";
  });

InstructorDiv.getElementsByClassName("savedata")[0].addEventListener(
  "click",
  function () {
    addInstructorData();
    location.href = "../studentAffairs.html";
  },
);

EmployeeDiv.getElementsByClassName("savedata")[0].addEventListener(
  "click",
  function () {
    addEmployeeData();
    location.href = "../studentAffairs.html";
  },
);

CourseDiv.getElementsByClassName("savedata")[0].addEventListener(
  "click",
  function () {
    addCoursesData();
    location.href = "../studentAffairs.html";
  },
);

function addStudentData() {
  let id = student.duplicateID(
    studentDiv.getElementsByTagName("input")[0].value,
    studentInfo,
  );
  let name = studentDiv.getElementsByTagName("input")[1].value;
  let email = studentDiv.getElementsByTagName("input")[2].value;
  let advisorId = employee.getIdOfEmployeeName(
    studentDiv.getElementsByTagName("input")[3].value.toString().trim(),
    employeeInfo,
  );
  let course1 = course.getIdofCoursesbyTitle(
    studentDiv.getElementsByTagName("select")[0].value,
    courseInfo,
  );
  let course2 = course.getIdofCoursesbyTitle(
    studentDiv.getElementsByTagName("select")[1].value,
    courseInfo,
  );
  let course3 = course.getIdofCoursesbyTitle(
    studentDiv.getElementsByTagName("select")[2].value,
    courseInfo,
  );
  let courses = [Number(course1), Number(course2), Number(course3)];
  let Studentdata = {
    ["id"]: id,
    ["name"]: name,
    ["email"]: email,
    ["advisorId"]: Number(advisorId),
    ["courses"]: courses,
  };
  console.log(Studentdata);
  fetch("http://localhost:3000/students", {
    method: "POST",
    body: JSON.stringify(Studentdata),
  });
}

function addInstructorData() {
  let id = instructor.duplicateID(
    InstructorDiv.getElementsByTagName("input")[0].value,
    instructorInfo,
  );
  let name = InstructorDiv.getElementsByTagName("input")[1].value;
  let department = InstructorDiv.getElementsByTagName("input")[2].value;

  let Instructordata = {
    ["id"]: id,
    ["name"]: name,
    ["department"]: department,
  };
  fetch("http://localhost:3000/instructors", {
    method: "POST",
    body: JSON.stringify(Instructordata),
  });
}

function addEmployeeData() {
  let id = employee.duplicateID(
    EmployeeDiv.getElementsByTagName("input")[0].value,
    employeeInfo,
  );
  let name = EmployeeDiv.getElementsByTagName("input")[1].value;
  let role = EmployeeDiv.getElementsByTagName("input")[2].value;

  let EmployeeData = {
    ["id"]: id,
    ["name"]: name,
    ["role"]: role,
  };
  fetch("http://localhost:3000/employees", {
    method: "POST",
    body: JSON.stringify(EmployeeData),
  });
}
function addCoursesData() {
  let id = course.duplicateID(
    CourseDiv.getElementsByTagName("input")[0].value,
    courseInfo,
  );
  let title = CourseDiv.getElementsByTagName("input")[1].value;
  let creditHours = CourseDiv.getElementsByTagName("input")[2].value;
  let instructorId = instructor.getIdOfInstructorbyname(
    CourseDiv.getElementsByTagName("input")[3].value.toString().trim(),
    instructorInfo,
  );
  let CoursesData = {
    ["id"]: id,
    ["title"]: title,
    ["creditHours"]: creditHours,
    ["instructorId"]: Number(instructorId),
  };
  fetch("http://localhost:3000/courses", {
    method: "POST",
    body: JSON.stringify(CoursesData),
  });
}
