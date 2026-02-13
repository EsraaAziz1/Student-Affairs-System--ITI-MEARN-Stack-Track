import  {Employee}  from "./Employee.js";
import { Students } from "./Student.js";
import { Courses } from "./Courses.js";
import { Instructors } from "./Instructor.js";
import searching_using_anyColumn from "../Functional component/Search.js";

let employee = new Employee()
let dataEmployee =await employee.fetchData()
console.log(dataEmployee)
let instructor = new Instructors()
let dataInstructor =await instructor.fetchData()
console.log(dataInstructor)
let entity = document.querySelectorAll('li');
let EntityTable = document.querySelector('.EntityTable');

entity.forEach((ent)=>{
    ent.addEventListener('click' , function(e){
        console.log(e.target.innerHTML)
        let showTableOfEntity = e.target.innerHTML;
        if(showTableOfEntity === 'Employee'){
            EntityTable.innerHTML = `
                  <div class="header">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Role</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>
            `
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
              `
           }
           searching_using_anyColumn(dataEmployee);
        }
          else if(showTableOfEntity === 'Instructor'){
            EntityTable.innerHTML=''
            EntityTable.innerHTML = `
                  <div class="header">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>department</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>
            `
           for (let index = 0; index < dataInstructor.length; index++) {
               EntityTable.innerHTML += `
                    
                    <div class="content">
                        <p>${dataInstructor[index].id}</p>
                        <p>${dataInstructor[index].name}</p>
                        <p>${dataInstructor[index].department}</p>
                        <input type="button" value="Edit"
                            style=" background-color: #05498d; color: white; border: none; border-radius: 3px;">
                        <input type="button" value="Delete"
                            style=" background-color: #042d3a;color: white; border: none; border-radius: 3px;">
                    </div>
              `
           };
                
          }
            
    })
})