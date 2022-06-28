function submit(){
    const number1 = [10,20,15,30];
    const number2 = number1.reduce(myFunction);
    document.getElementById("demo9").innerHTML = number2;
    function myFunction(result,value,index,array){
        return result + value;
    }
}