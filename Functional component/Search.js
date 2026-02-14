import { Courses } from "../Classes Modules/Courses.js";
import { Employee } from "../Classes Modules/Employee.js";
import { Instructors } from "../Classes Modules/Instructor.js";

let employee = new Employee();
let course = new Courses();
let Instructor = new Instructors();

let EntityTable = document.querySelector(".EntityTable");

// ///////////////////////////////////////Searching by Employee ///////////////////////////////////////////////////////
function searching_by_employee(instance_of_employee) {
    let search = document.querySelector('#search_data');

    search.addEventListener('input', function () {
        // debugger
        // if(dataSearch === '' || dataSearch )

        let input = document.querySelector('input')
        let dataSearch = input.value.toLowerCase();
        console.log(dataSearch)
        let search_data = instance_of_employee.filter((instance) => {
            return instance.name.toLowerCase().includes(dataSearch) || instance.role.toLowerCase().includes(dataSearch)
        })
        console.log(search_data)

        EntityTable.innerHTML = '';
        Show_Header_Employee()
        for (let index = 0; index < search_data.length; index++) {
            EntityTable.innerHTML += `
               <div class="content">
                        <p>${search_data[index].id}</p>
                        <p>${search_data[index].name}</p>
                        <p>${search_data[index].role}</p>
                        <input type="button" value="Edit" 
                            style=" background-color: #05498d; color: white; border: none; border-radius: 3px;">
                        <input type="button" value="Delete"
                            style=" background-color: #042d3a;color: white; border: none; border-radius: 3px;">
                    </div>  
            `

        }

    })

}

// ///////////////////////////////////////Searching by Students ///////////////////////////////////////////////////////

 function searching_by_Student(instance_of_student , instance_of_Employee , courseFetched) {
    let search = document.querySelector('#search_data');
    search.addEventListener('input', function () {
        // debugger
        // if(dataSearch === '' || dataSearch )
        let input = document.querySelector('input')
        let dataSearch = input.value.toLowerCase();
        console.log(dataSearch)
        let search_data = instance_of_student.filter((instance) => {
            return instance.name.toLowerCase().includes(dataSearch) || instance.email.toLowerCase().includes(dataSearch);

            // instance.department.toLowerCase().includes(dataSearch)
        })
        console.log(search_data)

        EntityTable.innerHTML = '';
        Show_Header_Student()
        for (let index = 0; index < search_data.length; index++) {
             EntityTable.innerHTML += `
                    <div class="content">
                        <p>${search_data[index].id}</p>
                        <p>${search_data[index].name}</p>
                        <p>${search_data[index].email}</p>
                        <p>
                        <select name="course" >
                            <option value="default">Courses</option>
                            <option value="course1">${course.getName_ofCourses(search_data[index].courses[0], courseFetched)}</option>
                            <option value="course2">${course.getName_ofCourses(search_data[index].courses[1], courseFetched)}</option>
                            <option value="course3">${course.getName_ofCourses(search_data[index].courses[2], courseFetched)}</option>
                        </select>
                        </p>
                        <p>${employee.getNameOfEmployee(search_data[index].advisorId, instance_of_Employee)}</p>
                        <input type="button" class="edit" value="Edit"/>
                        <input type="button" class="delete" value="Delete"/>
                        </div>`;

        }

    })

}

// ///////////////////////////////////////Searching by instructor ///////////////////////////////////////////////////////

 function searching_by_Instructor(instance_of_instructor) {
    let search = document.querySelector('#search_data');
    search.addEventListener('input', function () {
        // debugger
        // if(dataSearch === '' || dataSearch )
        let input = document.querySelector('input')
        let dataSearch = input.value.toLowerCase();
        console.log(dataSearch)
        let search_data = instance_of_instructor.filter((instance) => {
            return instance.name.toLowerCase().includes(dataSearch) || instance.department.toLowerCase().includes(dataSearch);
        })
        console.log(search_data)

        EntityTable.innerHTML = '';
        Show_Header_Instructor()
       for (let index = 0; index < search_data.length; index++) {
            EntityTable.innerHTML += `         
                    <div class="content">
                        <p>${search_data[index].id}</p>
                        <p>${search_data[index].name}</p>
                        <p>${search_data[index].department}</p>
                        <input type="button" value="Edit"
                            style=" background-color: #05498d; color: white; border: none; border-radius: 3px;">
                        <input type="button" value="Delete"
                            style=" background-color: #042d3a;color: white; border: none; border-radius: 3px;">
                    </div>
              `;
       }

    })

}


// ///////////////////////////////////////Searching by Courses ///////////////////////////////////////////////////////

 function searching_by_Courses(instance_of_course , instance_of_instructor) {
    let search = document.querySelector('#search_data');
    search.addEventListener('input', function () {
        // debugger
        // if(dataSearch === '' || dataSearch )
        let input = document.querySelector('input')
        let dataSearch = input.value.toLowerCase();
        console.log(dataSearch)
        let search_data = instance_of_course.filter((instance) => {
            return instance.title.toLowerCase().includes(dataSearch);
        })
        console.log(search_data)

        EntityTable.innerHTML = '';
        Show_Header_Courses()
       for (let index = 0; index < search_data.length; index++) {
            EntityTable.innerHTML += `
                    <div class="content">
                        <p>${search_data[index].id}</p>
                        <p>${search_data[index].title}</p>
                        <p>${search_data[index].creditHours}</p>
                        <p>${Instructor.getNameOfInstructor(search_data[index].instructorId, instance_of_instructor)}</p>
                        <input type="button" value="Edit"
                            style=" background-color: #05498d; color: white; border: none; border-radius: 3px;">
                        <input type="button" value="Delete"
                            style=" background-color: #042d3a;color: white; border: none; border-radius: 3px;">
                    </div>
              `;
       }

    })

}

/////////////////////////////////////////////////Headers Show/////////////////////////////////////////////////
function Show_Header_Employee() {
    EntityTable.innerHTML = `
                  <div class="header">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Role</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>
            `;
}
function Show_Header_Student() {
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
}
function Show_Header_Instructor(){
     EntityTable.innerHTML = `
                  <div class="header">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Department</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>
            `;
}

function Show_Header_Courses(){
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
}

export { searching_by_employee , searching_by_Student ,searching_by_Instructor , searching_by_Courses}