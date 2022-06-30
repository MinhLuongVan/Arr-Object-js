// xử lý quy tắc bât đồng bộ trong js
// trước khi có promise thì sd callBack(hell) dễ bị dối,khó nhìn
// tạo ra promise : new Promise(function (resolve,reject))
// truyền vào excutor function với 2 callBack function là:  resolve, reject. gọi resolve khi không có lỗi, reject có lỗi.
var promise = new Promise(
    //Excutor
    function(resolve,reject){
        resolve();
       //reject();
    }
);
promise 
    .then(function(){
        return 1;// nếu k return ra 1 promise thì sẽ chạy ngay then thứ 2 
    })
    .then(function(data){
        console.log(data);
        return 2;
    })
    .then(function(data){
        console.log(data);
        return 3;
    })

    .catch(function(){
        console.log("Thất bại");
    })
    .finally(function(){
        console.log("Done");
    });


//Example

function sleep(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve,ms);
    });
}
sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return new Promise((resolve, reject) => {
            reject("Lỗi!");
        })
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .then(function(){
        console.log(4);
        return sleep(1000);
    })
    .catch(function(err){
        console.log(err);
    });

//Promise.all
var promise1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve([1,2]);
    },2000)
});
var promise2 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve([3,4]);
    },3000)
});
Promise.all([promise1,promise2])
    .then(function(result){
        //console.log(result);
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    })

