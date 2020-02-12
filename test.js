let myFetch = require("./umd");

myFetch.init({
  address: "https://pokeapi.co/api/v2/",
  key: "1234"
});

myFetch.get("pokemon/ditto/").then(result => console.log(result));
