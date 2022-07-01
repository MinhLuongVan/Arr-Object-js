// class cơ bản
//vd
class Course {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    getName(){
        this.name;
    }
    getPrice(){
        this.price;
    }
}
const jsCourse = new  Course('JavaScript',200);
const PHPCourse = new  Course('PHP',500);
console.log(jsCourse);
console.log(PHPCourse);


// vd2 

class Car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year;
    }
}
const date = new Date();
const year = date.getFullYear();
const myCar = new Car("Vios",2016);
const string = "My car is ";
console.log(string.concat(myCar.age(year)));


// vd3 Kế thừa in class
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name,age,id,address){
        super(name,age);
        this.id = id;
        this.address = address;
       
    }
}
const std1 = new Student("Minh",18,20,"BG");
console.log(std1);



// vd4 getter and setter

class fruit {
    constructor(name,category){
        this.name = name;
        this.category = category;
    }
    get namefruit (){
        return this.name;
    }
    set namefruit(x){
        this.name = x;
    }
}
var myFruit = new fruit("Apple","Clear");
myFruit.name = "Banana";
console.log(myFruit);
