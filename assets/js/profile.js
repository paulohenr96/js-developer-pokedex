var url_string = window.location.href; // www.test.com?filename=test
var url = new URL(url_string);
var paramValue = url.searchParams.get("id");
var sectionProfile = document.getElementById("profile");

var pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${paramValue}/`;

function infoPokemon() {
  return fetch(pokemonUrl).then((response) => {
    console.log("oi");
    console.log(response.body);
    return response.json();
  });
}
function buscaProfile() {
  infoPokemon().then((pokemon) => {
    console.log(pokemon);
    sectionProfile.innerHTML += `
          <div class="profile ${pokemon.types[0].type.name}">
          <img
            src="${pokemon.sprites.other.dream_world.front_default}"
          />
          <div class="data">
            <span>Nome</span> <span class="profilename">${pokemon.name}</span>
      
            <span>ID</span> <span>${pokemon.id}</span>
      
            <span>Experience</span> <span>${pokemon.base_experience}</span>
      
            <span>Height</span> <span>${pokemon.height}</span>
      
            <span>Weight</span> <span>${pokemon.weight}</span>
          </div>
        </div>
            `;
  });
}
