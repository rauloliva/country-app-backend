const router = require('express').Router()
const http = require('../http/http')

// enabling cross origin CORS-Policy
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

router.get('/country/:name', async (req, res) => {
    const countryName = req.params.name
    try {
        const data = await http.request(`/name/${countryName}`)
        countriesData = convertData(data)
        res.json(countriesData)
    } catch (error) {
        res.json({
            status: 404, 
            message: error.message}
        ).status(404)
    }
})

router.get('/country/all/:name', async (req, res) => {
    const countryName = req.params.name
    try {
        const data = await http.request(`/name/${countryName}`)
        countryData = addIdValue(data)
        res.json(countryData)
    } catch (error) {
        res.json({
            status: 404, 
            message: error.message}
        ).status(404)
    }
})

router.get('/lang/:language', async (req, res) => {
    const language = req.params.language
    try {
        const data = await http.request(`/lang/${language}`)
        res.json(data)
    } catch (error) {
        res.json({
            status: 404, 
            message: error.message}
        ).status(404)
    }
})

router.get('/region/:region', async (req, res) => {
    const region = req.params.region
    try {
        const data = await http.request(`/region/${region}`)
        res.json(data)
    } catch (error) {
        res.json({
            status: 404, 
            message: error.message}
        ).status(404)
    }
})

router.use((req, res) => res.json({errorStatus: 404}))

const convertData = data => {
    return data.map((country, id) => {
        return {
            name: country.name,
            flag: country.flag,
            id: `${id}_${country.name}`
        }
    })
}

const addIdValue = data => {
    return data.map((country, id) => {
        return {
            id: `${id}_${country.name}`,
            ...country
        }
    })
}

module.exports = router