// http://websamuraj.pl/examples/js/projekt11/

const startBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const div = document.querySelector('div div');

let time = 0;
let active = false;



const timer = () => {
    if (!active) { //if not active (false)
        active = !active; //przypisz false do aktive
        startBtn.textContent = "Pause";
        t = setInterval(counter, 10);
    } else {
        active = !active;
        startBtn.textContent = "Start";
        clearInterval(t)
    }
}
const counter = () => {
    time++;
    div.textContent = (time / 100).toFixed(2);
}


startBtn.addEventListener('click', timer)

const clean = () => {
    div.textContent = "---";
    time = 0;
    active = false;
    startBtn.textContent = "Start";
    clearInterval(t);
}

resetBtn.addEventListener('click', clean)