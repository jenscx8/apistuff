import axios from "axios";

const pokeButton = document.getElementById('get-pokemon')
pokeButton.addEventListener('click', () => {
    const amount = document.getElementById('num-pokemon').value
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=' + amount

    axios.get(url)
    .then((response) => {
        let pokelist = document.getElementById('pokemon-list')
        pokelist.innerHTML = ''
        for (let i = 0; i < response.data.results.length; i++) {
            let newListItem = document.createElement('li')
            newListItem.innerHTML = response.data.results[i].name
            pokelist.appendChild(newListItem)
       }
    })
    .catch((error) => {

    })
})