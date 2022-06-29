function submit(){
    function myfunction(param){
        param("Minh Lương Văn");
    }
    function callback(value){
        document.getElementById("demo12").innerHTML = value;
    }

    myfunction(callback);


   /* function myFun(abc){
        document.getElementById("demo12").innerHTML = abc;
    }
    function mySum (num1,num2,myCallBack){
        let sum = num1+num2;
        myCallBack(sum);
    }
    mySum (2,6,myFun);*/
}