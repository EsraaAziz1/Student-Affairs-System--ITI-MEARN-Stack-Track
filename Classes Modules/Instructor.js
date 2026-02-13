import { Courses } from "./Courses.js";

export class Instructors extends Courses{
    
   async fetchData(){
        try {
           return await fetch('http://localhost:3000/instructors')
                .then((response) => {return response.json()})
        }
        catch (error) {
            console.log("ERROR with catch", error);
        }
    }
}


let ins1 = new Instructors()
console.log(ins1.fetchData())



