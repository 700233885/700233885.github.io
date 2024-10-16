const img = document.querySelector('img')
const button = document.querySelector('button')

const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const response = await fetch(url)
    const pokemon = await response.json()
    return pokemon
}

const renderPokemon = pokemon => {
    img.src = pokemon.sprites.front_default
    img.alt = pokemon.name
    parentElement.append(img);
}

const generate = () =>{
    getRandomPokemon().then(pokemon => {
        renderPokemon(pokemon)
    });
}

generate()

button.addEventListener('click', () => {
    generate()
})

