// this key object ke sath hi kam krta hai
const user = {
    username: "mith",
    price: 11,

    welcomemgs: function () {
        console.log(`${this.username} welcome to our worl`);
        console.log(this);
    }
}

console.log(this);
user.welcomemgs()
user.username = "das"
user.welcomemgs()

// normal function
function exmple() {
    console.log(this);
}
// exmple()
// normal function other use
const exmpl = function () {
    let username = 'mk'
    console.log(this.username);
}
// exmpl()
// arrow function
const expl = () => {
    let username = 'das'
    // console.log(this.username);
    console.log(this);

}
expl()
// arrow function 
const addnum = (num1, num2) => {
    return num1 + num2
}
console.log(addnum(10, 2));
 // arrow function
const addnum2 = (num1, num2) => num1 + num2
console.log(addnum2(10, 20));
// arrow function
const add = (num1, num2) => (num1 + num2)
console.log(add(2, 2));
    // arrow function
const add2 = (n1, n2) => ({ username: "mk" })
console.log(add2());


