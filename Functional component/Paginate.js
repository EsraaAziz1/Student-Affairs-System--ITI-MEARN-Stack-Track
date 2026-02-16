import { Employee } from "../Classes Modules/Employee.js";
import { Courses } from "../Classes Modules/Courses.js";
import { Students } from "../Classes Modules/Student.js";
import { Instructors } from "../Classes Modules/Instructor.js";

let employee = new Employee();
let EmployeeInfo = await employee.fetchData();

let Student = new Students();
let StudentInfo = await Student.fetchData();

let course = new Courses();
let coursesInfo = await course.fetchData();

let Instructor = new Instructors();
let InstructorInfo = await Instructor.fetchData();

let EntityTable = document.querySelector(".EntityTable");

function paginatePage(){
    let SelectPaginate = document.querySelector('#SelectPaginate')
    console.log(SelectPaginate.value)
    let prePage = Number(SelectPaginate.value)
    if(prePage === 10 ){
         coursesInfo.length*0.1;
         for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
         }
    }

}


export {paginatePage}



