class Student
{
    constructor(name, id, grade){
        this.name=name;
        this.id=id;
        this.grade=grade;
    }

    // setDetails()
    // {
    //     this.sid=101;
    //     this.snam="John";
    //     this.grade="A";
    // }

    display(){
        console.log(this.id, this.name, this.grade);
    }
}
    let stu= new Student("Mimi", 778, "Y");
   // stu.setDetails();
    stu.display();


