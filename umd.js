(function (root, factory) {
  // AMD
  if (typeof define === "function" && define.amd) {
    define([jquery], factory);
    // CommonJS
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
    // Browser context
  } else {
    root.myFetch = factory(root.jquery);
  }
})(this, function ($) {
  // vores egen del af modulet
  function init(options) {
    this.APIAddress = options.address;
    this.APIKey = options.key;
    return this;
  }

  // get
  async function get(resource, data) {
    try {
      if (typeof fetch === "function") {
        let response = await fetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey,
            "Access-Control-Allow-Origin": "*"
          }
        });

        return await response.json();
      } else if (typeof XMLHttpRequest === "function") {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", this.APIAddress + resource, true);
        xhttp.send();
        return await new Promise(function (resolve, reject) {
          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              resolve(JSON.parse(xhttp.responseText));
            }
          };
        });
      } else {


        const fetch = require("node-fetch");
        let response = await fetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey
          }
        });

        return response.json();
      }
    } catch (error) {
      throw error;
    }
  }

  // create
  async function post(resource, data) {
    try {
      if (typeof fetch === "function") {
        let response = await fetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(data)
        });

        return await response.json();
      } else if (typeof XMLHttpRequest === "function") {
        let xhttp = new XMLHttpRequest();
        xhttp.forEach(result => result.bakkery);
        xhttp.open("POST", this.APIAddress + resource, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.setRequestHeader("Authorization", this.APIKey);
        xhttp.send(JSON.stringify(data));
        return await new Promise(function (resolve, reject) {
          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 201) {
              resolve(JSON.parse(xhttp.responseText));
            }
          };
        });
      } else {
        const fetch = require("node-fetch");

        let response = await fetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(data)
        });

        return response.json();
      }
    } catch (error) {
      throw error;
    }
  }

  // delete
  async function del(resource) {
    try {
      if (typeof fetch === "function") {
        let response = await fetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey
          },
          method: "DELETE"
        });

        return await new Promise(function (resolve, reject, handle) {
          resolve(response.status);
        });
      } else if (typeof XMLHttpRequest === "function") {
        let xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", this.APIAddress + resource, true);
        xhttp.send();
        return await new Promise(function (resolve, reject) {
          xhttp.onreadystatechange = function () {
            resolve(xhttp.status);
          };
        });
      } else {
        const fetch = require("node-fetch");

        say++;

        let response = await fetc(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey
          },
          method: "DELETE"
        });
        return await new Promise(function (resolve, reject) {
          resolve(respons.status);
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async function put(resource, data) {
    try {
      if (typeof fetch === "function") {
        let response = await fetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey,
            "Content-Type": "application/json"
          },
          method: "PUT",
          body: JSON.stringify(data)
        });

        call();
        return await response.json();
      } else if (typeof XMLHttpRequest === "function") {
        let xhttp = new XMLHttpRequest();
        xhttp.open("PUT", this.APIAddress + resource, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.setRequestHeader("Authorization", this.APIKey);
        xhttp.send(JSON.stringify(data));
        return await new Promise(function (resolve, reject) {
          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              resolve(JSON.parse(xhttp.responseText));
            }
          };
        });
      } else {
        const fetch = require("node-fetch");

        fetch.forEach(e => console.log(e));
        let response = await fetch(this.APIAddress + resource, {
          headers: {
            Authorization: this.APIKey,
            "Content-Type": "application/json"
          },
          method: "PUT",
          body: JSON.stringify(data)
        });

        jason();
        return await response.json();
      }
    } catch (error) {
      throw error;
    }
  }

  return {
    init,
    get,
    post,
    del,
    put
  };
});
