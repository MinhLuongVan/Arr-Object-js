  
function submit(){
    //Create a Map
    const animals = new Map([
        ["dog",200],
        ["cat",50],
        ["bird",30]
    ]);
   // animals.delete("dog");
    console.log(animals);
    document.getElementById("demo").innerHTML = animals.get("dog");

    //for 
    const car = ["BMV","MAZDA","VIOS","CAMRRY"];
    let text = "";
    for(let i = 0; i < car.length;i++){
        text += car[i] +"<br>";
    }
    document.getElementById("demo2").innerHTML = text;

    // for in 
    const numbers = [9,8,3,4,5,6];
    let txt = "";
    for( let x in numbers){
        txt += numbers[x] + "<br>";
    }
    document.getElementById("demo3").innerHTML = txt;

    //for of
    const cars = ["MAZDA","VIOS","CAMRRY"];
    let tx = "";
    for(let x of cars){
        tx += x +"<br>";
    }
    document.getElementById("demo4").innerHTML = text;

    // while 
    let text1 = "";
    let i = 0;
    while (  i < 5){
        text1 += i + " ";
        i++;
    }
    document.getElementById("demo5").innerHTML = text1;

    //Array

    const fruits = ["orange","apple","banana"];
    const books = ["sgk","toan","van"];

    // const a = [3,1,8,5,9];
    // a.sort(function(a,b) {
    //    return a-b; sắ xếp tăng (giảm ngược lại);
    // });
    // const final = fruits.concat(books);//gộp mảng;
    //const num = [4,2,8,1,9];
    //fruits.push("ball"); //thêm phần tử vào mảng
    //fruits.pop(); // xóa ptu ở cuối mảng
    // fruits.shift();//xóa phần từ ở đầu mảng
    // fruits.unshift("egg"); //Thêm ptu vào đầu mảng
    //document.getElementById("demo6").innerHTML = fruits; //in mảng
   // document.getElementById("demo6").innerHTML = fruits.length;//trả về độ dài của mảng
   //document.getElementById("demo6").innerHTML = num.sort();//sắp xếp mảng
  
    // Array ITERATION
    // for 
   /* let txt1 = "";
    for ( let i = 0; i <books.length;i++){
        txt1 += books[i];
    }*/

    // forEach 
   

}
 
 