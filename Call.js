// gọi hàm với call method
// gọi hàm và bind this ,lưu ý tỏng strictmode vẫn có this nếu được bind
// thể hiện tính kế thừa trong oop
// vdu
const teacher = {
    firstName :'Minh',
    lastName : 'Thu',
}
const me = {
    firstName : 'Khanh',
    lastName : 'Phương',
    fullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
me.fullName.call(teacher);

// Tính kế thừa

function Animal(name,weight) {
    this.name = name;
    this.weight = weight;
}

function Chicken(name,weight,legs) {
    Animal.call(this,name,weight);
    this.legs = legs;
}
const ck1 = new Chicken('Minh gà',60,2)
console.log(ck1);