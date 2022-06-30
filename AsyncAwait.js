async function myDisplay (){
    let myPromise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Lương Văn Minh <3");
        },3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
    myDisplay();

}