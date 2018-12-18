const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Anna", "Joanna", "Magdalena", "Kalina", "Daria", "Daniela", "Anastazja", "Laura"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];

// console.log(names[index]);

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    // const indexPrefix = Math.floor(Math.random() * prefixs.length);
    // div.textContent = `${prefixs[indexPrefix]}, że najlepsze będzie imię ${names[indexName]}`
    div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]}, że najlepsze będzie imię ${names[indexName]}`

}

btn.addEventListener('click', nameGenerator)