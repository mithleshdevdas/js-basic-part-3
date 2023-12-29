let a = 100
if (true) {
    let a = 10
    const b = 20
        console.log("inner ",a);
}

console.log("outer ", a);

function one() {
    const username = "mithlesh"
    function two() {
        const website = 'local host port:3000'
        console.log(username + website);
    }
    // console.log(wesite);
    two()
}
one()

if (true) {
    const user = 'devdas'
    if (user === 'devdas') {
        const website = 'localhost'
        console.log(user + website);
    }
    // console.log(website);
}
// console.log(user);
