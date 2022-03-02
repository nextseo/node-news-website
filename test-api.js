const axios = require("axios");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "08107d7bf2080859470ec02ecaeb9404";

const cityName = "khonkaen";
const countryCode = "th";

axios
  .get(`${apiUrl}?q=${cityName},${countryCode}&appid=${apiKey}&units=metric`)
  .then((res) => console.log(res.data))
  .catch(err => console.log(err))
