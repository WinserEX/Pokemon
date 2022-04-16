const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

function Pokemon(a) {
    let gen = a;
    if (gen == 1) {
        for (let i = 1; i <= 151; i++) {
            const pokemonFG = document.createElement('div');
            pokemonFG.classList.add('firstGen');
            const label = document.createElement('span');
            label.innerText = `#${i}`;
            const newImg = document.createElement('img');
            newImg.src = `${baseURL}${i}.png`
       
       
            pokemonFG.appendChild(newImg);
            pokemonFG.appendChild(label);
            container.appendChild(pokemonFG);
           }
    }
    else if (gen == 2) {
        for (let i = 152; i <= 251; i++) {
            const pokemonFG = document.createElement('div');
            pokemonFG.classList.add('firstGen');
            const label = document.createElement('span');
            label.innerText = `#${i}`;
            const newImg = document.createElement('img');
            newImg.src = `${baseURL}${i}.png`
       
       
            pokemonFG.appendChild(newImg);
            pokemonFG.appendChild(label);
            container.appendChild(pokemonFG);
        }
    }
    else {
        document.write('More gens coming soon');
    }
}


let input = prompt("Choose your pokemon gen");
Pokemon(input);


