import { Employee } from "./Employee.js";

export class Students extends Employee{
   
   async fetchData(){
       await  fetch('http://localhost:3000/students')
         .then(res => res.json())
         .then(res =>  
              console.log(res)
         )
    }
}


let std1 = new Students()
console.log(std1.fetchData())



