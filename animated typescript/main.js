// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = ['Dzień dobry!!!', 'Fajnie, że jesteś :)', 'Zaczynamy...']

let activeText = 0;
let activeLetter = -20;

let indexText = 0;
const time = 40;

// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout
    if (activeLetter >= 0) {
        spanText.textContent += txt[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeText].length) {

        activeText++;
        if (activeText === txt.length) return;

        return setTimeout(() => {
            activeLetter = -10;
            spanText.textContent = "";
            addLetter();
        }, 2000)

    }
    setTimeout(addLetter, 100)


}


addLetter(); //pierwsze wywołanie




// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);