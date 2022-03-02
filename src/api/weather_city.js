const axios = require('axios')
const settings = require('./weather_setting')

const city = (cityName = 'Bangkok', countryCode = 'TH')=> {
    return axios
    .get(`${settings.apiUrl}?q=${cityName},${countryCode}&appid=${settings.apiKey}&units=metric`)
} 

module.exports = city