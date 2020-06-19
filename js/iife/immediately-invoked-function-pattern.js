// basic structure
(function () {
    console.log('It is IIFE');
})();

(function (name) {
    console.log('It is IIFE ' + name);
})('hello ES5');

(function () {
    console.log('It is an another IIFE');
}());

function globalTest() {
    console.log('It is an global function');
}

