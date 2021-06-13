const axios = require('axios')

const axiosInstance = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2'
})

module.exports = axiosInstance