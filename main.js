const pokemon = document.querySelector('#pokemon');

function renderPokemon (image) {
    pokemon.setAttribute('src', image);
}

// Fetch a partir de un Json con URL

fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
        renderPokemon(data.image)
    })

// Fetch a partir de un binario (JPG)

fetch('pikachu.jpg')
    .then(response => response.blob())
    .then(binaryLargeObject => {
        const domString = URL.createObjectURL(binaryLargeObject);
        renderPokemon(domString);
    })

// Fetch a partir de una API

fetch('https://pokeapi.co/api/v2/pokemon/25/')
    .then(response => response.json())
    .then(pokemon => {
        renderPokemon(pokemon.sprites.front_default);
    })