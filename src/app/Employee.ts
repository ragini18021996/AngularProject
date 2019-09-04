export class Employee{
    Id:number;
    name:string;
    Dept:string;
    D_O_J:string;
    salary:number;
    constructor( Id:number,
        name:string,
        Dept:string,
        D_O_J:string,
        salary:number,){
            
            this.Id=Id;
            this.name=name;
            this.Dept=Dept;
            this.D_O_J=D_O_J;
            this.salary=salary;

    }

}