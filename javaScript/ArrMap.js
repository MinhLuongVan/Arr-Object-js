//là hàm dùng để lặp qua các phần tử của mảng và cho phép xử lý giá trị của phần tử đó.
function submit(){
    const a = [2,4,5,7,9];
    const b = a.map(myFunction);
    console.log(b);
    document.getElementById("demo7").innerHTML = b;
    function myFunction(value,index,array){
        return value*2;
    }
}

var fruit = [
    'Apple',
    'Orange',
    'Banana'
];
fruit.map(function(item){
    console.log(item);
})