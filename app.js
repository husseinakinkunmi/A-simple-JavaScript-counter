let add = document.getElementById('increment');
let subt = document.getElementById('decrement');
let res = document.getElementById('reset');

let num = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function(){
    integer += 1;
    num.innerHTML = integer;
})

subt.addEventListener('click', function () { 
    integer -= 1;
    num.innerHTML = integer;
})

res.addEventListener('click', function () {
    integer = 0;
    num.innerHTML = integer;
})