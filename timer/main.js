const addSec = () => {
    let sec = 0;
    document.body.textContent = `0 sekund`;

    const timer = () => {
        sec++;
        document.body.textContent = sec + " sekund";
    }
    return timer

}

const start = addSec();

setInterval(start, 1000)