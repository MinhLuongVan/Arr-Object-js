function submit(){
    const fruits = ["orange","apple","banana"];
    const books = ["sgk","toan","van"];
    let txt1 = "<ul>";
    fruits.forEach(myFunction);
     txt1 += "</ul>";
    function myFunction(value){
        txt1 += "<br>" +value+ "</br>";
    }
    document.getElementById("demo6").innerHTML = txt1;
}