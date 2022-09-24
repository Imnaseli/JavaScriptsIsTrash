class Student{
    constructor(name , age , roll){
        this.name = name
        this.age = age
        this.roll = roll
    }

    org(){
        return(this.name+' works at Blur studios')
    }
    dob(){
        return(this.name+' is '+this.age+' years old')
    }
}


class Student2 extends Student{
    constructor(name, age , roll , language , department){
        super(name,age,roll)
        this.language = language
        this.department = department
    }
}

var blur = new Student2('blur' , 23 , '323' , 'English' , 'Engineering')
document.write(blur.department)