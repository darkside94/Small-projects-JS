const div = document.querySelector('div');
let mousePosition;
let catchDiv = false;
let offset = [0, 0];

div.addEventListener('mousedown', (e) => {
    catchDiv = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
});

document.addEventListener('mouseup', function () {
    catchDiv = false;
});

document.addEventListener('mousemove', function (e) {
    e.preventDefault();
    if (catchDiv) {
        mousePosition = {

            x: e.clientX,
            y: e.clientY

        };
        div.style.left = `${mousePosition.x+offset[0]}px`;
        div.style.top = `${mousePosition.y + offset[1]}px`;
        div.style.backgroundColor = 'gray';
    }
    if (!catchDiv) {
        div.style.backgroundColor = 'black';
    }
});