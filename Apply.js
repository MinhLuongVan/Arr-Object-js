//cho phép gọi 1 hàm với 1 this(bind) và truyền đối số cho hàm gôc dưới dạng mảng
//vd1
const teacher= {
    firstName : 'Minh',
    lastName : 'Thu',
}
function greet ( greeting,message){
    return (`${greeting} ${this.firstName} ${this.lastName} ${message}`)
}
let result = greet.apply(teacher,['Em chào cô','Cô ăn cơm chưa :)']);
console.log(result);

//vd2 extend
function Animal(name,legs){
    this.name = name,
    this.legs = legs
}
function Parrot(){
    Animal.apply(this,arguments)
    this.speak = function(){
        console.log("Xin chao");
    }
}
const parrot = new Parrot('Vẹt đỏ',2);
console.log(parrot);

/*       ---------------So sánh ---------
  3 function đều được kế thừa từ lớp Function.prototype.name   // name ở d dây là bind, call, apply.
            ------------------------
  bind() ||   bind(teacher, name, age)
     +    Trả ra hàm mới, thực hiện bind `this` với `thisArg`    
     +    Không thực hiện gọi hàm
     +    Nếu được bind kèm vởi các tham số thứ 2 (arg2, arg3) thì các arg này sẽ được ưu tiên hơn.
            ------------------------
   call() ||  call(teacher, name, age)
     +   Thực hiện bind this với thisArg và thực hiện gọi hàm 
     +   Nhận đối số cho hàm gốc từ tham số thứ 2
            ------------------------
  apply()     || apply(teacher, [name, age])
      +   Thực hiện bind this với thisArg và thực hiện gọi hàm 
      +   Nhận các đối số cho hàm gốc từ tham số thứ 2 dưới dạng mảng
 */

