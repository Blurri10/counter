const reset = document.querySelector('#reset');
const main = document.querySelector('main');
const counter = document.querySelector('#counter')
let count = 0;

main.addEventListener('click', function() {
    count++;
    counter.innerText = count;
})

reset.addEventListener('click', function(e) {
    e.stopPropagation();
    count = 0;
    counter.innerText = count;
})