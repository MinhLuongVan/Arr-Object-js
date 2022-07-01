// mảng
var arr = ['js','php','c'];
var [a,b,c] = arr;
console.log(a,b,c);


// rest (sử dụng với Destructuring)

var arr = ['js','php','c'];
var [a,...rest] = arr;
console.log(rest);


// object

var Course = {
    name:'PHP',
    price:2000,
    children : {
        name : 'Reactjs'
    }
};
var {name: parentName , children: {name:childrenName} } = Course;
console.log(childrenName);
console.log(parentName);