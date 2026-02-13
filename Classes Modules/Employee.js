
export class Employee{
     #id=0;
    constructor(id , name , role){
       this.id = id;
       this.name = name;
       this.role = role;
    }
    set Id(idValue){
        this.#id = idValue++;
    }
    get Id(){
        return this.#id;
    }
    
}