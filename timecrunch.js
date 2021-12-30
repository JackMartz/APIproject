// In referencing zoom videos use time 1:07:00 and onward


const baseURL = 'https://pokeapi.co/api/v2/pokemon';

let buttonElement = document.getElementById('da-button');
let listElement = document.getElementById('pokemon-list');

// Below should be basic 
function fetchPokemon() {
    //Retrieve the Pokemon data with Fetch
    // Format the data that comes back 
    // Present that data with DOM Elements
    fetch(`${ baseURL }?limit=251`)
    // fetch(`${ baseURL }/1`)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);

        for (let pokemon of jsonData.results) {
            fetchPokemonById(pokemon);
        }
    })
}

function fetchPokemonById(pokemon){
    let url = `${ baseURL }/${pokemon.name}`
    fetch(url)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);
        displayPokemon(jsonData);
    })
}

function displayPokemon(pokemonData) {
    
    let pokemonCard = document.createElement('li');
    let pokemonName = document.createElement('h2');
    let pokemonImage = document.createElement('img');
    let pokemonType = document.createElement('p');

    pokemonName.innerText = pokemonData.name;
    pokemonImage.src = pokemonData.sprites.versions["generation-ii"].crystal.front_default;
    pokemonType.innerText = pokemonData.types[0].type.name;

    pokemonCard.classList.add('pokemon-card');
    pokemonName.classList.add('pokemon-name');
    pokemonImage.classList.add('pokemon-image');
    pokemonType.classList.add('pokemon-type');

    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonType);

    listElement.appendChild(pokemonCard);
}
buttonElement.addEventListener('click', () => {
    console.log('testing');
    fetchPokemon();
})
