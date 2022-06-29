function myfunction(){
    console.log(1);
    const myNodeList = document.querySelectorAll("span");
    for(let i = 0; i < myNodeList.length;i++){
        myNodeList[i].style.color = "blue";
    }
}