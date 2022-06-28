function submit(){
    const a = [3,4,2,9,6];
    const key = a.keys();
    for(let x of key){
        document.getElementById("demo11").innerHTML += x +"<br>";
    }
}