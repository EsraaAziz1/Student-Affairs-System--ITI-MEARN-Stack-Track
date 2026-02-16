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
let PreviousPage = document.querySelector('.PreviousPage');
let NextPage = document.querySelector('.NextPage');
let startIndex = document.querySelector('.startIndex');
let EndIndex = document.querySelector('.EndIndex');
let Pagelength = document.querySelector('.length');

let SelectPaginate = document.querySelector('#SelectPaginate');
let prePage = Number(SelectPaginate.value);
let currentPage = 0;


///////////////////////////////////Paginate pages Records/////////////////////////////////////////


///////////////////////////PaginatePage Courses//////////////////////////////
function paginatePage_Courses(coursesInfo) {
    
    show_header_crs();
    renderPage_course();

    // let start = currentPage * prePage;
    // let end = start + prePage;
    // let pageData = coursesInfo.slice(start, end);
    

    SelectPaginate.addEventListener('change', () => {
        // console.log(SelectPaginate.value)
        prePage = Number(SelectPaginate.value);
        currentPage = 0;
        renderPage_course();
    })
    
    //////////////// Button ----> Next//////////////////////////
    NextPage.addEventListener('click', () => {
        let MaxPage = Math.ceil(coursesInfo.length / prePage) - 1;
        if (currentPage < MaxPage) {
            currentPage++;
            renderPage_course();
        }
    })
    
    //////////////// Button ----> Previous//////////////////////////
    PreviousPage.addEventListener('click', () => {
        // let MaxPage = Math.ceil(coursesInfo.length / prePage) - 1;
        if (currentPage >0) {
            currentPage--;
            renderPage_course();
        }
    })

}

///////////////////////////PaginatePage Employee//////////////////////////////
function paginatePage_Employee( EmployeeInfo) {
    
    show_header_emp();
    renderPage_Employee();

    // let start = currentPage * prePage;
    // let end = start + prePage;
    // let pageData = coursesInfo.slice(start, end);
    

    SelectPaginate.addEventListener('change', () => {
        // console.log(SelectPaginate.value)
        prePage = Number(SelectPaginate.value);
        currentPage = 0;
        renderPage_Employee();
    })
    
    //////////////// Button ----> Next//////////////////////////
    NextPage.addEventListener('click', () => {
        let MaxPage = Math.ceil(EmployeeInfo.length / prePage) - 1;
        if (currentPage < MaxPage) {
            currentPage++;
            renderPage_Employee();

        }
    })
    
    //////////////// Button ----> Previous//////////////////////////
    PreviousPage.addEventListener('click', () => {
        // let MaxPage = Math.ceil(EmployeeInfo.length / prePage) - 1;
        if (currentPage >0) {
            currentPage--;
            renderPage_Employee();
        }
    })

}

///////////////////////////PaginatePage Instructor//////////////////////////////
function paginatePage_Instructor( InstructorInfo) {
    
    show_header_Ins();
    renderPage_Instructor();

    // let start = currentPage * prePage;
    // let end = start + prePage;
    // let pageData = coursesInfo.slice(start, end);
    

    SelectPaginate.addEventListener('change', () => {
        // console.log(SelectPaginate.value)
        prePage = Number(SelectPaginate.value);
        currentPage = 0;
        renderPage_Instructor();
    })
    
    //////////////// Button ----> Next//////////////////////////
    NextPage.addEventListener('click', () => {
        let MaxPage = Math.ceil(InstructorInfo.length / prePage) - 1;
        if (currentPage < MaxPage) {
            currentPage++;
            renderPage_Instructor();

        }
    })
    
    //////////////// Button ----> Previous//////////////////////////
    PreviousPage.addEventListener('click', () => {
        // let MaxPage = Math.ceil(InstructorInfo.length / prePage) - 1;
        if (currentPage >0) {
            currentPage--;
            renderPage_Instructor();
        }
    })

}

///////////////////////////PaginatePage Student//////////////////////////////
function paginatePage_Student(StudentInfo ) {
    
    show_header_std();
    renderPage_Student();

    // let start = currentPage * prePage;
    // let end = start + prePage;
    // let pageData = coursesInfo.slice(start, end);
    

    SelectPaginate.addEventListener('change', () => {
        // console.log(SelectPaginate.value)
        prePage = Number(SelectPaginate.value);
        currentPage = 0;
        renderPage_Student();
    })
    
    //////////////// Button ----> Next//////////////////////////
    NextPage.addEventListener('click', () => {
        let MaxPage = Math.ceil(StudentInfo.length / prePage) - 1;
        if (currentPage < MaxPage) {
            currentPage++;
            renderPage_Student();

        }
    })
    
    //////////////// Button ----> Previous//////////////////////////
    PreviousPage.addEventListener('click', () => {
        // let MaxPage = Math.ceil(StudentInfo.length / prePage) - 1;
        if (currentPage >0) {
            currentPage--;
            renderPage_Student();
        }
    })

}



//////////////////////////////Show Data Records ///////////////////////////

////////////////Show Courses//////////////////////
function show_dataRecord_Courses(courseData, InstructorInfo) {
    for (let index = 0; index < courseData.length; index++) {
        EntityTable.innerHTML += `<div class="content" style="grid-template-columns: 10px repeat(5, 1fr);">
                        <p>${courseData[index].id}</p>
                        <p>${courseData[index].title}</p>
                        <p>${courseData[index].creditHours}</p>
                        <p>${Instructor.getNameOfInstructor(courseData[index].instructorId, InstructorInfo)}</p>
                        <input type="button" value="Edit"  class ="edit">
                        <input type="button" value="Delete" class ="delete"> </div>`;
    }
}

function show_header_crs() {
    EntityTable.innerHTML = `<div class="header" style="grid-template-columns: 10px repeat(5, 1fr)">
                            <h3>ID</h3>
                            <h3>Title</h3>
                            <h3>Credit Hours</h3>
                            <h3>Instructor Name</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3>
                    </div>`;
    document.getElementsByClassName("header")[0].style.opacity = 1;
}

function renderPage_course() {
    show_header_crs();

    let start = currentPage * prePage;
    let end = start + prePage;

    startIndex.innerHTML = start + 1;
    EndIndex.innerHTML = Math.min(end , coursesInfo.length);   
    Pagelength.innerHTML = coursesInfo.length;

    let pageData = coursesInfo.slice(start, end);
    show_dataRecord_Courses(pageData, InstructorInfo);
}

////////////////Show Employee//////////////////////
function show_dataRecord_Employee(EmployeeInfo) {
     for (let index = 0; index < EmployeeInfo.length; index++) {
    EntityTable.innerHTML += `
                    <div class="content" style="grid-template-columns: 10px repeat(4, 1fr);">
                        <p>${EmployeeInfo[index].id}</p>
                        <p>${EmployeeInfo[index].name}</p>
                        <p>${EmployeeInfo[index].role}</p>
                        <input type="button" value="Edit" class ="edit">
                        <input type="button" value="Delete" class="delete">
                    </div>`;
  }
}

function show_header_emp() {
   EntityTable.innerHTML = `<div class="header" style="grid-template-columns: 10px repeat(4, 1fr);">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Role</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3></div>`;
  document.getElementsByClassName("header")[0].style.opacity = 1;
}

function renderPage_Employee() {
    show_header_emp();

    let start = currentPage * prePage;
    let end = start + prePage;

    startIndex.innerHTML = start + 1;
    EndIndex.innerHTML = Math.min(end , EmployeeInfo.length);   
    Pagelength.innerHTML = EmployeeInfo.length;

    let pageData = EmployeeInfo.slice(start, end);
    show_dataRecord_Employee(pageData);
}

////////////////Show Instructor//////////////////////
function show_dataRecord_Instructor(InstructorInfo) {
    for (let index = 0; index < InstructorInfo.length; index++) {
    EntityTable.innerHTML += `
                    <div class="content" style="grid-template-columns: 10px repeat(4, 1fr);">
                        <p>${InstructorInfo[index].id}</p>
                        <p>${InstructorInfo[index].name}</p>
                        <p>${InstructorInfo[index].department}</p>
                        <input type="button" value="Edit" class ="edit">
                        <input type="button" value="Delete" class="delete">
                    </div>`;
  }
}

function show_header_Ins() {
   EntityTable.innerHTML = `<div class="header" style="grid-template-columns: 10px repeat(4, 1fr);">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Role</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3></div>`;
  document.getElementsByClassName("header")[0].style.opacity = 1;
}

function renderPage_Instructor() {
    show_header_Ins();

    let start = currentPage * prePage;
    let end = start + prePage;

    startIndex.innerHTML = start + 1;
    EndIndex.innerHTML = Math.min(end , InstructorInfo.length);   
    Pagelength.innerHTML = InstructorInfo.length;

    let pageData = InstructorInfo.slice(start, end);
    show_dataRecord_Instructor(pageData);
}

////////////////Show Student//////////////////////
 function show_dataRecord_Student(StudentInfo , coursesInfo ,EmployeeInfo ) {
    for (let i = 0; i < StudentInfo.length; i++) {
    EntityTable.innerHTML += `
    <div class="content" style="grid-template-columns: 10px repeat(6, 2fr);">
    <p>${StudentInfo[i].id}</p>
        <p>${StudentInfo[i].name}</p>
        <p>${StudentInfo[i].email}</p>
        <p>
          <select name="course" >
            <option value="default">Courses</option>
            <option value="course1">${ course.getNameofCoursesbyID(StudentInfo[i].courses[0], coursesInfo)}</option>
            <option value="course2">${ course.getNameofCoursesbyID(StudentInfo[i].courses[1], coursesInfo)}</option>
            <option value="course3">${ course.getNameofCoursesbyID(StudentInfo[i].courses[2], coursesInfo)}</option>
          </select>
        </p>
        <p>${ employee.getNameOfEmployee(StudentInfo[i].advisorId, EmployeeInfo)}</p>
        <input type="button" class="edit" value="Edit"/>
        <input type="button" class="delete" value="Delete"/>
        </div>`;
  }
}

function show_header_std() {
    EntityTable.innerHTML = `<div class="header" style="grid-template-columns: 10px repeat(6, 2fr);">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Email</h3>
                            <h3>Courses</h3>
                            <h3>Advisor Name</h3>
                            <h3>Edit</h3>
                            <h3>Delete</h3></div>`;
  document.getElementsByClassName("header")[0].style.opacity = 1;
}

function renderPage_Student() {
    show_header_std();

    let start = currentPage * prePage;
    let end = start + prePage;

    startIndex.innerHTML = start + 1;
    EndIndex.innerHTML = Math.min(end , StudentInfo.length);   
    Pagelength.innerHTML = StudentInfo.length;

    let pageData = StudentInfo.slice(start, end);
    show_dataRecord_Student(pageData , coursesInfo ,EmployeeInfo );
}



//////////////////////////////////////Export////////////////////////////////////////////////////
export { paginatePage_Courses , paginatePage_Employee , paginatePage_Instructor , paginatePage_Student}



