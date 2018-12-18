let size = 10;
let orderElement = 1;

const init = () => {
    const button = document.createElement('button');
    const buttonReset = document.createElement('button');
    button.textContent = 'Add 10 elements to list';
    buttonReset.textContent = 'Clean';
    const ul = document.createElement('ul');
    document.body.appendChild(button);
    document.body.appendChild(buttonReset);
    document.body.appendChild(ul);
    ul.style.listStyle = 'none';
    button.addEventListener('click', createLiElements);
    buttonReset.addEventListener('click', cleanList);
}

const createLiElements = () => {
    const ul = document.querySelector('ul');
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = 'Element nr ' + (orderElement++);
        li.style.fontSize = `${size++}px`;
        ul.appendChild(li);
    }


}

const cleanList = () => {
    document.querySelector('ul').textContent = '';
    size = 10;
    orderElement = 1;
}

init()