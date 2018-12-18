const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (e) => {
    // console.log(e.clientX, e.clientY); //wyswietla pozycje kursora na osi X i Y wzgledem okna przegladarki

    // niewazne co przekazujemy jako arguemnt funckji, byle sie zgadzaly nazwy

    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    h1.textContent = x + ", " + y;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width * 100) + (y / height * 100)) / 2;
    document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;
    //document.querySelector('h1').textContent = `X: ${e.clientX}, Y: ${e.clientY}`


    //{e.pageX}, Y: ${e.pageY} - jesli od poczatku dokumentu a nie poczatku okna przegladarki

    //{e.screenX}, Y: ${e.screenY}

    // document.body.style.backgroundColor = `rgb(${e.clientX},${e.clientY},100)`;


})