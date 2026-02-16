import { Employee } from "../Classes Modules/Employee.js";
import { Students } from "../Classes Modules/Student.js";
import { Courses } from "../Classes Modules/Courses.js";
import { Instructors } from "../Classes Modules/Instructor.js";
import {
  reanderCoursesData,
  reanderEmployeeData,
  reanderInstructorData,
  renderStudentData,
} from "../renderData.js";

let employee = new Employee();
let EmployeeInfo = await employee.fetchData();

let Student = new Students();
let StudentInfo = await Student.fetchData();

let course = new Courses();
let coursesInfo = await course.fetchData();

let Instructor = new Instructors();
let InstructorInfo = await Instructor.fetchData();

export function getHeaderStudentData(EntityTable, flag) {
  let head = EntityTable.children[0].children;
  Array.from(head).forEach(function (Element) {
    Element.addEventListener("click", function (e) {
      if (e.target.innerHTML === "ID") {
        if (flag) {
          sortIdAscending(StudentInfo);
        } else {
          sortIdDescending(StudentInfo);
        }
        renderStudentData(StudentInfo, coursesInfo, EmployeeInfo);
        flag = !flag;
        getHeaderStudentData(EntityTable, flag);
      } else if (e.target.innerHTML === "Name") {
        if (flag) {
          sortNameAscending(StudentInfo);
        } else {
          sortNameDescending(StudentInfo);
        }
        renderStudentData(StudentInfo, coursesInfo, EmployeeInfo);
        flag = !flag;
        getHeaderStudentData(EntityTable, flag);
      } else if (e.target.innerHTML === "Email") {
        if (flag) {
          sortEmailAscending(StudentInfo);
        } else {
          sortEmailDescending(StudentInfo);
        }
        renderStudentData(StudentInfo, coursesInfo, EmployeeInfo);
        flag = !flag;
        getHeaderStudentData(EntityTable, flag);
      } else if (e.target.innerHTML === "Advisor Name") {
        if (flag) {
          sortAdvisorIdAscending(StudentInfo);
        } else {
          sortAdvisorIdDescending(StudentInfo);
        }
        renderStudentData(StudentInfo, coursesInfo, EmployeeInfo);
        flag = !flag;
        getHeaderStudentData(EntityTable, flag);
      }
    });
  });
}

export function getHeaderCourseData(EntityTable, flag) {
  let head = EntityTable.children[0].children;
  Array.from(head).forEach(function (Element) {
    Element.addEventListener("click", function (e) {
      if (e.target.innerHTML === "ID") {
        if (flag) {
          sortIdAscending(coursesInfo);
        } else {
          sortIdDescending(coursesInfo);
        }
        reanderCoursesData(coursesInfo);
        flag = !flag;
        getHeaderCourseData(EntityTable, flag);
      } else if (e.target.innerHTML === "Title") {
        if (flag) {
          sortTitleAscending(coursesInfo);
        } else {
          sortTitleDescending(coursesInfo);
        }
        reanderCoursesData(coursesInfo);
        flag = !flag;
        getHeaderCourseData(EntityTable, flag);
      } else if (e.target.innerHTML === "Instructor Name") {
        if (flag) {
          sortInstructorIdAscending(coursesInfo);
        } else {
          sortInstructorIdDescending(coursesInfo);
        }
        reanderCoursesData(coursesInfo);
        flag = !flag;
        getHeaderCourseData(EntityTable, flag);
      } else if (e.target.innerHTML === "Credit Hours") {
        if (flag) {
          sortCreditHoursAscending(coursesInfo);
        } else {
          sortCreditHoursDescending(coursesInfo);
        }
        reanderCoursesData(coursesInfo);
        flag = !flag;
        getHeaderCourseData(EntityTable, flag);
      }
    });
  });
}

export function getHeaderInstructorData(EntityTable, flag) {
  let head = EntityTable.children[0].children;
  Array.from(head).forEach(function (Element) {
    Element.addEventListener("click", function (e) {
      if (e.target.innerHTML === "ID") {
        if (flag) {
          sortIdAscending(InstructorInfo);
        } else {
          sortIdDescending(InstructorInfo);
        }
        reanderInstructorData(InstructorInfo);
        flag = !flag;
        getHeaderInstructorData(EntityTable, flag);
      } else if (e.target.innerHTML === "Name") {
        if (flag) {
          sortNameAscending(InstructorInfo);
        } else {
          sortNameDescending(InstructorInfo);
        }
        reanderInstructorData(InstructorInfo);
        flag = !flag;
        getHeaderInstructorData(EntityTable, flag);
      } else if (e.target.innerHTML === "Department") {
        if (flag) {
          sortDepartmentAscending(InstructorInfo);
        } else {
          sortDepartmentDescending(InstructorInfo);
        }
        reanderInstructorData(InstructorInfo);
        flag = !flag;
        getHeaderInstructorData(EntityTable, flag);
      }
    });
  });
}

export function getHeaderEmployeeData(EntityTable, flag) {
  let head = EntityTable.children[0].children;
  console.log(head)
  Array.from(head).forEach(function (Element) {
    Element.addEventListener("click", function (e) {
      if (e.target.innerHTML === "ID") {
        if (flag) {
          sortIdAscending(EmployeeInfo);
        } else {
          sortIdDescending(EmployeeInfo);
        }
        reanderEmployeeData(EmployeeInfo);
        flag = !flag;
        getHeaderEmployeeData(EntityTable, flag);
      } else if (e.target.innerHTML === "Name") {
        if (flag) {
          sortNameAscending(EmployeeInfo);
        } else {
          sortNameDescending(EmployeeInfo);
        }
        reanderEmployeeData(EmployeeInfo);
        flag = !flag;
        getHeaderEmployeeData(EntityTable, flag);
      } else if (e.target.innerHTML === "Role") {
        if (flag) {
          sortRoleAscending(EmployeeInfo);
        } else {
          sortRoleDescending(EmployeeInfo);
        }
        reanderEmployeeData(EmployeeInfo);
        flag = !flag;
        getHeaderEmployeeData(EntityTable, flag);
      }
    });
  });
}

function sortIdAscending(data) {
  data.sort(function (a, b) {
    return Number(a.id) - Number(b.id);
  });
}

function sortIdDescending(data) {
  data.sort(function (a, b) {
    return Number(b.id) - Number(a.id);
  });
}

function sortCreditHoursAscending(data) {
  data.sort(function (a, b) {
    return Number(a.creditHours) - Number(b.creditHours);
  });
}

function sortCreditHoursDescending(data) {
  data.sort(function (a, b) {
    return Number(b.creditHours) - Number(a.creditHours);
  });
}

function sortNameAscending(data) {
  data.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function sortNameDescending(data) {
  data.sort(function (a, b) {
    return b.name.localeCompare(a.name);
  });
}

function sortEmailAscending(data) {
  data.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function sortEmailDescending(data) {
  data.sort(function (a, b) {
    return b.name.localeCompare(a.name);
  });
}

function sortAdvisorIdAscending(data) {
  data.sort(function (a, b) {
    return Number(a.advisorId) - Number(b.advisorId);
  });
}

function sortAdvisorIdDescending(data) {
  data.sort(function (a, b) {
    return Number(b.advisorId) - Number(a.advisorId);
  });
}

function sortInstructorIdAscending(data) {
  data.sort(function (a, b) {
    return Number(a.instructorId) - Number(b.instructorId);
  });
}

function sortInstructorIdDescending(data) {
  data.sort(function (a, b) {
    return Number(b.instructorId) - Number(a.instructorId);
  });
}

function sortTitleAscending(data) {
  data.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
}

function sortTitleDescending(data) {
  data.sort(function (a, b) {
    return b.title.localeCompare(a.title);
  });
}

function sortDepartmentAscending(data) {
  data.sort(function (a, b) {
    return a.department.localeCompare(b.department);
  });
}

function sortDepartmentDescending(data) {
  data.sort(function (a, b) {
    return b.department.localeCompare(a.department);
  });
}

function sortRoleAscending(data) {
  data.sort(function (a, b) {
    return a.role.localeCompare(b.role);
  });
}

function sortRoleDescending(data) {
  data.sort(function (a, b) {
    return b.role.localeCompare(a.role);
  });
}
