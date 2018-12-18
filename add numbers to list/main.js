const button = document.querySelector('button');

let oddNumber = 1;

button.addEventListener('click', function () {

    const li = document.createElement('li');

    li.textContent = oddNumber;

    if (oddNumber % 3 == 0) {
        li.classList.add('big');
    }

    document.body.appendChild(li);
    oddNumber += 2;

})