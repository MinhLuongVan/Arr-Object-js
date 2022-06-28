function submit(){
    const c = [7,9,20,5];
    const d = c.filter(myFunction);
    console.log(d);
    document.getElementById("demo8").innerHTML = d;
    function myFunction(value,index,array){
        return value > 5;
    }
}