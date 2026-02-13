import { Students } from "./Student.js"

export class Courses extends Students{
   
   async fetchData(){
       await  fetch('http://localhost:3000/courses')
         .then(res => res.json())
         .then(res =>  
              console.log(res)
         )
    }
}


let crs1 = new Courses()
console.log(crs1.fetchData())



