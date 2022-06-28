function submit(){
    const a = [2,4,5,7,9];
    const b = a.map(myFunction);
    console.log(b);
    document.getElementById("demo7").innerHTML = b;
    function myFunction(value,index,array){
        return value*2;
    }
}