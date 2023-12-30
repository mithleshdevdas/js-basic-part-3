// Immediateli Invoked Function Expressions(IIFe)

(function Iife() {
    console.log('db concted');
})();

(() => {
    console.log('db concted 5g');
})();

((name) => {
    console.log(` ${name}db concted 5g`);
})('mithlesh');