// pthuc bind() sẽ trả về hàm mới
// có thể nhận các đối số như hàm ban đầu

//vidu
const person = {
    firstName : 'Minh',
    lastName : 'Lương',
    fullName : function(){
        let x = document.getElementById("demo12");
        x.innerHTML =  this.firstName + " " + this.lastName;
    }
}
const menber = {
    firstName : 'Công',
    lastName : 'Vinh',
}
let fullName = person.fullName.bind(menber);
setTimeout(fullName,3000);
//console.log(fullName());

//