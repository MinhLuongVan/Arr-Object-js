function submit(){
  const person = {
    firstname : "Minh",
    lastname : "Luong",
    adress : "BG",
    fullName : function(){
       return this.firstname + " "+ this.lastname;
    }
  };
        document.getElementById("demo12").innerHTML = person.fullName();

}