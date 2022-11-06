const fetch = require("node-fetch");

let serpSearch =
  "https://serpapi.com/search.json?engine=google_events&q=Events+near+";
let serpAPI =
  "&api_key=6795b3bfbe28cc6626ccac39f71080321c76e9b41688da8bd2388002a2b73b8d";
async function fetchEvents(city) {
  let url = serpSearch + city + serpAPI;
  let result;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result = data;
    });

  return result;
}
fetchEvents("Chapel+Hill");
