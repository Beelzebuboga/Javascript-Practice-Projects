//fetch = function used for making HTTP request to fetch resources. (JSON style data, images, files) simplifies asynchronous data fetching in Javascript and used for interacting APIs to retrieve and send data asynchronously over the web.
// fetch(url,{method/ option})

fetchData();
async function fetchData(){
    try{
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }
    catch(error){
    console.error(error);

    }
}
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch resources")
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error =>console.log(error));