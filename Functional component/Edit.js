import { Courses } from "../Classes Modules/Courses.js";
import { Employee } from "../Classes Modules/Employee.js";
import { Instructors } from "../Classes Modules/Instructor.js";

let employee = new Employee();
let course = new Courses();
let Instructor = new Instructors();

let dataINSFetch = await Instructor.fetchData();
let dataEMPFetch = await employee.fetchData();
let dataCRSFetch = await course.fetchData();

let EntityTable = document.querySelector(".EntityTable");
let EmployeeForm = document.querySelector('.EmployeeForm');
let StudentForm = document.querySelector('.StudentForm');
let CourseForm = document.querySelector('.CourseForm');
let InstructorForm = document.querySelector('.InstructorForm')

///////////////////////////// Entity Employee Update //////////////////////////

function update_Employee() {


    let IdEmp = document.querySelector('.ID');
    let Name = document.querySelector('.Name');
    let Role = document.querySelector('.Role');
    let savedata = document.querySelector('.savedata');
    let prevRef = document.querySelector('form')

    EntityTable.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        // console.log(e.target.textContent)
        //    console.log(e.target.name)

        if (e.target.classList.contains('edit')) {
            EmployeeForm.style.display = 'block';
            StudentForm.style.display = 'none';
            CourseForm.style.display = 'none';
            InstructorForm.style.display = 'none';

            console.log(e.target.parentElement)
            console.log(e.target.parentElement.children[2].innerHTML)
            let ContentData = e.target.parentElement;
            IdEmp.value = ContentData.children[0].innerHTML;
            Name.value = ContentData.children[1].innerHTML;
            Role.value = ContentData.children[2].innerHTML;

            // if(ID.value !== ContentData.children[0].innerHTML ||  Name.value !== ContentData.children[1].innerHTML || Role.value !== ContentData.children[2].innerHTML){

            // }    
        }
    })
    prevRef.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    savedata.addEventListener('click', (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/employees/${IdEmp.value}`, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: IdEmp.value,
                name: Name.value,
                role: Role.value
            })
        })
            .then(res => res.json())
            .then(console.log);
    })

}


///////////////////////////// Entity Instructor Update //////////////////////////
function update_Instructor() {


    let InsID = document.querySelector('.InsID');
    let Name_Instructor = document.querySelector('.Name_Instructor');
    let Department = document.querySelector('.Department');
    let savedata = document.querySelector('.savedata');
    let prevRef = document.querySelector('form')

    EntityTable.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        if (e.target.classList.contains('edit')) {
            InstructorForm.style.display = 'block';
            EmployeeForm.style.display = 'none';
            StudentForm.style.display = 'none';
            CourseForm.style.display = 'none';

            console.log(e.target.parentElement)
            console.log(e.target.parentElement.children[2].innerHTML)
            let ContentData = e.target.parentElement;
            console.log(ContentData.children[0].innerHTML)
            InsID.value = ContentData.children[0].innerHTML;
            Name_Instructor.value = ContentData.children[1].innerHTML;
            Department.value = ContentData.children[2].innerHTML;
        }
    })
    prevRef.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    savedata.addEventListener('click', (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/instructors/${InsID.value}`, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: InsID.value,
                name: Name_Instructor.value,
                department: Department.value
            })
        })
            .then(res => res.json())
            .then(console.log);
    })

}

///////////////////////////// Entity Student Update //////////////////////////

function update_Student() {


    let stdID = document.querySelector('.stdID');
    let StdName = document.querySelector('.StdName');
    let stdEmail = document.querySelector('.stdEmail');
    let EmpOfStd = document.querySelector('.EmpOfStd');
    let course1 = document.querySelector('.crs');
    let course2 = document.querySelector('.crs2');
    let course3 = document.querySelector('.crs3');

    let savedata = document.querySelector('.savedata');
    let prevRef = document.querySelector('form')

    let employeeId;

    EntityTable.addEventListener('click', async (e) => {
        console.log(e)
        console.log(e.target)
        if (e.target.classList.contains('edit')) {
            StudentForm.style.display = 'block';
            InstructorForm.style.display = 'none';
            EmployeeForm.style.display = 'none';
            CourseForm.style.display = 'none';

            console.log(e.target.parentElement)
            // console.log(e.target.parentElement.children[2].innerHTML)
            let ContentData = e.target.parentElement;
            stdID.value = ContentData.children[0].innerHTML;
            StdName.value = ContentData.children[1].innerHTML;
            stdEmail.value = ContentData.children[2].innerHTML;
            EmpOfStd.value = ContentData.children[4].innerHTML;
            fetchNameofCrs(course1)
            fetchNameofCrs(course2)
            fetchNameofCrs(course3)

            // console.log(ContentData.children[3].children[0].children[1].innerHTML)
            // for (let index = 0; index < ContentData.children[3].innerHTML.length; index++) {
            //    course1[index].value = ContentData.children[3].innerHTML[index]
            //    course1[index].innerText = course1[index].value ;
            // }
            employeeId = await employee.getIdOfEmployeeName(ContentData.children[4].innerHTML, dataEMPFetch);
            console.log('Employee ID before fetch')
        }
    })

    prevRef.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    savedata.addEventListener('click', async (e) => {
        e.preventDefault();
        let crs1 = course1.value;
        let crs2 = course2.value;
        let crs3 = course3.value;
        console.log(crs1, crs2, crs3)
        let nameEMP = EmpOfStd.value;

        let employeeNewId = await employee.getIdOfEmployeeName(nameEMP, dataEMPFetch);
        console.log("Employee New ID:", employeeNewId);

        if (employeeNewId) {
            await updateStudent(employeeNewId);
        }
        else {
            await editName_ofEmp_fromStd(employeeId, nameEMP);
            await updateStudent(employeeId);
        }

        console.log(EmpOfStd.value)
        console.log(employeeId)

        async function updateStudent(idEMP) {
            await fetch(`http://localhost:3000/students/${stdID.value}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: stdID.value,
                    name: StdName.value,
                    email: stdEmail.value,
                    courses: [crs1, crs2, crs3],
                    advisorId: idEMP,

                })
            })
                .then(res => res.json())
                .then(console.log);
        }
        // fetch(`http://localhost:3000/students/${stdID.value}`, {
        //     method: 'PUT', /* or PATCH */
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         id:  stdID.value,
        //         name: StdName.value,
        //         email: stdEmail.value,
        //         advisorId: EmpOfStd.value 
        //     })
        // })
        //     .then(res => res.json())
        //     .then(console.log);
    })

}


///////////////////////////// Entity Courses Update //////////////////////////
function update_Courses() {

    let CrsId = document.querySelector('.CrsId');
    let Title = document.querySelector('.title');
    let creditHours = document.querySelector('.creditHours');
    let NameInstructor = document.querySelector('.NameInstructor');
    let savedata = document.querySelector('.savedata');
    let prevRef = document.querySelector('form');

    let instructorId;
    let department_of_Instructor;

    EntityTable.addEventListener('click', async function (e) {
        console.log(e)
        console.log(e.target)
        let ContentData = e.target.parentElement;
        if (e.target.classList.contains('edit')) {
            CourseForm.style.display = 'block';
            InstructorForm.style.display = 'none';
            EmployeeForm.style.display = 'none';
            StudentForm.style.display = 'none';


            console.log(e.target.parentElement)
            console.log(e.target.parentElement.children[2].innerHTML)
            CrsId.value = ContentData.children[0].innerHTML;
            Title.value = ContentData.children[1].innerHTML;
            creditHours.value = ContentData.children[2].innerHTML;
            NameInstructor.value = ContentData.children[3].innerHTML;
            instructorId = await Instructor.getIdOfInstructorbyname(ContentData.children[3].innerHTML, dataINSFetch);
            console.log("Instructor ID after fetch:", instructorId);
            department_of_Instructor = ContentData.children[1].innerHTML;
        }


    })
    prevRef.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    savedata.addEventListener('click', async (e) => {
        e.preventDefault();
        let nameINS = NameInstructor.value;
        let depNameINS = Title.value;
        if (depNameINS !== department_of_Instructor) {
            department_of_Instructor = depNameINS;
            console.log(depNameINS);
            await editName_ofIns_fromCrs(instructorId, nameINS, depNameINS);
        }
        let instructorNewId = await Instructor.getIdOfInstructorbyname(nameINS, dataINSFetch);
        console.log("Instructor New ID:", instructorNewId);

        if (instructorNewId) {
            await updateCourse(instructorNewId);
        }
        else {
            await editName_ofIns_fromCrs(instructorId, nameINS, depNameINS);
            await updateCourse(instructorId);
        }

        console.log(NameInstructor.value)
        console.log(instructorId)

        async function updateCourse(idINS) {
            await fetch(`http://localhost:3000/courses/${CrsId.value}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: CrsId.value,
                    title: depNameINS,
                    creditHours: creditHours.value,
                    instructorId: idINS
                })
            })
                .then(res => res.json())
                .then(console.log);
        }
        // fetch(`http://localhost:3000/courses/${Id.value}`, {
        //     method: 'PUT', /* or PATCH */
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         id: Id.value,
        //         title: Title.value,
        //         creditHours: creditHours.value,
        //         instructorId: instructorId,
        //     })
        // })
        //     .then(res => res.json())
        //     .then(console.log);
    })

}


//////////////////////////////mini function////////////////////////////

async function editName_ofIns_fromCrs(id, nameINS, crsName) {
    await fetch(`http://localhost:3000/instructors/${id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: nameINS,
            department: crsName
        })
    })
        .then(res => res.json())
        .then(console.log);
}

function fetchNameofCrs(selectOptionCrs) {
    selectOptionCrs.innerHTML = `<option value="">Select Course</option>`;

    for (let i = 0; i < dataCRSFetch.length; i++) {
        selectOptionCrs.innerHTML += `
            <option value="${dataCRSFetch[i].id}">
                ${dataCRSFetch[i].title}
            </option>
        `;
    }

}
async function editName_ofEmp_fromStd(id, nameEmp) {
    await fetch(`http://localhost:3000/employees/${id}`, {
        method: 'PATCH ', /* or PUT */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: nameEmp
        })
    })
        .then(res => res.json())
        .then(console.log);
}

////////////////////////////////Export///////////////////////////////
export { update_Employee, update_Instructor, update_Student, update_Courses }