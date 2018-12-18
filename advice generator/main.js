const advices = ['do it', 'fight', 'dont give up'];
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
const addbtn = document.querySelector('.add');
const resetbtn = document.querySelector('.clean');
const advbtn = document.querySelector('.showAdvice');
const possbtn = document.querySelector('.showOptions');

const addAdvice = (e) => {
    e.preventDefault();

    const newAdvice = input.value;
    if (newAdvice.length) {
        for (advice of advices) {
            if (advice === newAdvice) {
                alert('Juz bylo')
                return
            }
        }
    }
    advices.push(newAdvice);
    input.value = "";
    alert(`dodana została opcja ${newAdvice} `)
    console.log(advices);

}
const cleanAll = (event) => {
    event.preventDefault();
    advices.length = 0;

}

addbtn.addEventListener('click', addAdvice);
resetbtn.addEventListener('click', cleanAll);

const adviceGenerator = () => {

    const adviceIndex = Math.floor(Math.random() * advices.length);
    h1.textContent = `${advices[adviceIndex]}`;

}

advbtn.addEventListener('click', adviceGenerator);

const optionGenerator = () => {
    alert(advices.join('\n'))
}

possbtn.addEventListener('click', optionGenerator)