const square = document.createElement('div');
document.body.appendChild(square);

let grow = true;

let size = 100; //typ number
square.style.width = size + 'px';
square.style.height = size + 'px';
// 100 + 'px' --> '100'+'px' --> '100px'  dodanie typu number do stringa zamienia go na strirnga.
// maks wielkosc kdwaratu to: 
// window.innerWidth: 0.5


window.addEventListener("scroll", function () {
    if (grow == true) {
        size += 5;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    } else {
        size -= 5;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    }

    if (size >= window.innerWidth / 2) {
        grow = false;
    } else if (size == 0) {
        grow = true;
    }

})