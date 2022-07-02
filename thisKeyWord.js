//this trả về đối tượng nó đang thuộc về
/*Đặc tính:  
        + Trong một phương thức, this trỏ về đối tượng truy cập phương thức (trước dấu .)
        + Đứng ngoài phương thức, this trỏ về đối tượng Global
Lưu ý: 
      + this trong hàm tạo là đại diện cho đối tượng được tạo
      + this trong một hàm là undefined khi ở strict mode
      + Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác
      + arrow function trỏ this tới this bên ngoài của function
  */

const person = {
    firstName : 'Minh',
    lastName :'Lương',
    age : 23,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());