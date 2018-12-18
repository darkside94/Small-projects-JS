// tutaj rozwiązanie

const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const liItems = document.querySelectorAll('li');

let len = liItems.length;
let fontSize = 10;

// PĘTLA

// btn.addEventListener('click', function () {
//     fontSize++;
//     for (let i = 0; i < len; ++i) {
//         liItems[i].style.display = 'block';
//         ul.style.fontSize = fontSize + 'px';

//     }


// })


//FOREACH

btn.addEventListener('click', () => {

    liItems.forEach((liItem) => {
        liItem.style.display = 'block';
        liItem.style.fontSize = fontSize + "px";
    })
    fontSize++;
})