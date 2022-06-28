function submit(){
    function user (name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
        }

        var author = new user("minh",23,"BG");
        console.log(author);
        document.getElementById("demo12").innerHTML = author.name;

}