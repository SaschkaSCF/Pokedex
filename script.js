let currentPokemon;


async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('current Pokemon is:', currentPokemon);

    renderPokemonInfo();
}


function renderPokemonInfo() {
    document.getElementById('pokemon-name').innerHTML = currentPokemon['name'];
    document.getElementById('pokemon-img').src = currentPokemon['sprites']['front_shiny'];
}