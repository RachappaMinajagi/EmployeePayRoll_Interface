
// this is our model class having same field as we provide in the backend 
export class Employee {

    name!: String;
    gender!: String;
    department!: String;
    salary!: number;
    notes!: String
    profilePic!: String;
    date!: String;

    constructor(
        name: String,
        gender: String,
        department: String,
        salary: number,
        notes: String,
        profilePic:String,
        date:String
        ) 
        { }

}