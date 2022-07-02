// Là một hàm có thể ghi nhớ nơi no được tạo ra và truy cập đực biến ở bên ngoài phạm vi của  nó
function createCounter(){
    let counter = 0;
    function increase(){
        return ++counter;
    }
    return increase;
}
const counter1 = createCounter(); // tạo 1 vùng bên ngoài cho hàm createCounter thực thi
console.log(counter1());
console.log(counter1());


// ứng dụng closure

// const infoLogger = createLogger('Info')
// infoLogger('Bắt đầu gửi mail');
// infoLogger('Đang thưc hiện gửi');
// infoLogger('Gửi mail thành công');


//
function createStorage(key){
    const store = JSON.parse(localStorage.get(key)) ?? {}
    const save = () =>{
        localStorage.setItem(key,JSON,stringify(store))
    }
    const storage = {
        get(key){
            return store[key]
        },
        set(key,value){
            store[key]= value;
            save();
        },
        remove(key){
            delete store[key];
            save();
        }
    }
    return storage;
}
//Profile.js
const profileSetting = createStorage('profile_setting');
profileSetting.set('name','Minh');
profileSetting.set('age',23);


