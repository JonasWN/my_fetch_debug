let myFetch = require("./umd");



myFetch.init({
    address: "https://reqres.in/api/",
    key: "1234"
});

myFetch.get("1").then(result => console.log(result));