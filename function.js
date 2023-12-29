function sayhello() {
    console.log('hello world');
}
sayhello()

function addnum() {
    console.log(3+3);
}
addnum()

function addnumbers(num1, num2) {
    return num1+ num2
}
console.log(addnumbers(10, 5));

function usermgs(username) {
    return `${username} just login`
}
console.log(usermgs('mithlesh'));

function calcCartprice(...price) {
    return price
}
console.log(calcCartprice(100, 2000, 3, 5,));

const user = {
    username: 'mk',
    price: 199
}
function hangleObject(anyObj) {
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
}
hangleObject(user)

function hangleObj(anyObj2) {
    console.log(console.log(`username is ${anyObj2.username} and price is ${anyObj2.price}`));
}

hangleObj({
    username: 'das',
    price: 250
})

const myArr = [100, 200, 300, 500];

function handleArr(getarr) {
    return getarr[2]
}
// console.log(handleArr(myArr));
console.log(handleArr([10,30,50,70]));
