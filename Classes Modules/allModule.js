import { Employee } from "./Employee.js";
import { Employee } from "./Employee.js";
import { Students } from "./Student.js";
import { Courses } from "./Courses.js";
import { Instructors } from "./Instructor.js";

let employee = new Employee();
let dataEmployee = await employee.fetchData();

let Student = new Students();
let StudentInfo = await Student.fetchData();

let course = new Courses();
let dataCoures = await course.fetchData();

let Instructor = new Instructors();
let InstructorInfo = await Instructor.fetchData();

let entity = document.querySelectorAll("li");
let EntityTable = document.querySelector(".EntityTable");

entity.forEach((ent) => {
  ent.addEventListener("click", function (e) {
    console.log(e.target.innerHTML);
    let showTableOfEntity = e.target.innerHTML;
    if (showTableOfEntity === "Employees") {
      reanderData_Employee();
      //    searching_using_anyColumn(dataEmployee);
    } else if (showTableOfEntity === "Instructors") {
      EntityTable.innerHTML = "";
      reanderData_Instructor();
    } else if (showTableOfEntity === "Students") {
      EntityTable.innerHTML = "";
      renderStudentData();
    } else if (showTableOfEntity === "Courses") {
      EntityTable.innerHTML = "";
      reanderData_Courses();
    }
  });
});
function reanderData_Employee() {
  EntityTable.innerHTML = `
                  <div class="header">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Role</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>
            `;
  for (let index = 0; index < dataEmployee.length; index++) {
    EntityTable.innerHTML += `
                    
                    <div class="content">
                        <p>${dataEmployee[index].id}</p>
                        <p>${dataEmployee[index].name}</p>
                        <p>${dataEmployee[index].role}</p>
                        <input type="button" value="Edit" 
                            style=" background-color: #05498d; color: white; border: none; border-radius: 3px;">
                        <input type="button" value="Delete"
                            style=" background-color: #042d3a;color: white; border: none; border-radius: 3px;">
                    </div>
              `;
  }
}

function reanderData_Instructor() {
  EntityTable.innerHTML = `
                  <div class="header">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Department</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>
            `;
  for (let index = 0; index < InstructorInfo.length; index++) {
    EntityTable.innerHTML += `
                    
                    <div class="content">
                        <p>${InstructorInfo[index].id}</p>
                        <p>${InstructorInfo[index].name}</p>
                        <p>${InstructorInfo[index].department}</p>
                        <input type="button" value="Edit"
                            style=" background-color: #05498d; color: white; border: none; border-radius: 3px;">
                        <input type="button" value="Delete"
                            style=" background-color: #042d3a;color: white; border: none; border-radius: 3px;">
                    </div>
              `;
  }
}
function renderStudentData() {
  EntityTable.innerHTML = `
                  <div class="header">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Email</h3>
                            <h3>Courses</h3>
                            <h3>Advisor Name </h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>
            `;
  for (let i = 0; i < StudentInfo.length; i++) {
    EntityTable.innerHTML += `
    <div class="content">
    <p>${StudentInfo[i].id}</p>
        <p>${StudentInfo[i].name}</p>
        <p>${StudentInfo[i].email}</p>
        <p>
          <select name="course" >
            <option value="default">Courses</option>
            <option value="course1">${course.getName_ofCourses(StudentInfo[i].courses[0], dataCoures)}</option>
            <option value="course2">${course.getName_ofCourses(StudentInfo[i].courses[1], dataCoures)}</option>
            <option value="course3">${course.getName_ofCourses(StudentInfo[i].courses[2], dataCoures)}</option>
          </select>
        </p>
        <p>${employee.getNameOfEmployee(StudentInfo[i].advisorId, dataEmployee)}</p>
        <input type="button" class="edit" value="Edit"/>
        <input type="button" class="delete" value="Delete"/>
        </div>`;
  }
}
async function reanderData_Courses() {
  EntityTable.innerHTML = `
                  <div class="header">
                            <h3>ID</h3>
                            <h3>title</h3>
                            <h3>Credit Hours</h3>
                            <h3>Instructor Name</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>
            `;
  for (let index = 0; index < dataCoures.length; index++) {
    EntityTable.innerHTML += `
                    
                    <div class="content">
                        <p>${dataCoures[index].id}</p>
                        <p>${dataCoures[index].title}</p>
                        <p>${dataCoures[index].creditHours}</p>
                        <p>${Instructor.getNameOfInstructor(dataCoures[index].instructorId, InstructorInfo)}</p>
                        <input type="button" value="Edit"
                            style=" background-color: #05498d; color: white; border: none; border-radius: 3px;">
                        <input type="button" value="Delete"
                            style=" background-color: #042d3a;color: white; border: none; border-radius: 3px;">
                    </div>
              `;
  }
}
