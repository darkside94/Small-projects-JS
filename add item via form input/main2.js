const names = [22, 231];
const div = document.querySelector('div');

const addName = function (e) {
    e.preventDefault() // ta metoda pozwala nam zatrzymac domyslne dzialanie przegldarki
    const input = document.querySelector('input');
    const newName = input.value //console.log(e.target.value) - w tym przypadku targetem jest przycisk, dlatego nie mozemy tego dac na inputa
    if (input.value.length) {
        for (name of names) {
            if (name === newName) {
                alert("to juz jest!!!!!!!!!")
                return
            } //konczy dzialanie jesli nowe imie sie powtorzy 
        }
        names.push(newName); //dodaje wartosc do tablicy PUSH
        div.textContent += newName + ", ";
        input.value = "";
    }

}

document.querySelector('button').addEventListener('click', addName)

console.log()