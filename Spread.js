// khi gọi đến hàm truyền đối số là spread
// gộp mảng
var array = ['php','java','js'];
var array2 = ['c','python'];
var array3 = [...array2,...array];

console.log(array3);

// obj

var obj1 = {
    name : 'php'
};
var obj2 = {
    price : 2000
}
var obj3 = {
    ...obj1,
    ...obj2,
}
console.log(obj3);

// add ptu vào arr
 var fruits = ['orange','apple','banana'];
 var fruits2 = ['melon','peaches',...fruits];
 console.log(fruits2);
 
