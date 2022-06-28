function submit(){
    const user = {
        name : "Minh",
        age : 23,
        address : "BG"
    };
    let txt = "";
    for( let i in user){
        txt += user[i] + " ";
    }
    document.getElementById("demo12").innerHTML = txt;
}