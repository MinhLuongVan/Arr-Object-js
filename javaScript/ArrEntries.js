function submit(){
    const a = [3,2,8,9,4];
    const entries = a.entries();
    let txt ="";
    for(let i of entries){
        txt += i +"<br>";
        document.getElementById("demo10").innerHTML = txt ;
    }
}