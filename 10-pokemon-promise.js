"use strict";

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
  .then(({ abilities }) => {
    return fetch(abilities[0].ability.url);
  })
  .then((response) => response.json())
  .then(({ effect_entries }) => {
    const enLang = effect_entries.find((id) => id.language.name === "en");
    console.log(`Pokemon ability: ${enLang.effect}`);
  })
  .catch((error) => console.log(`Error: ${error.message}`));
