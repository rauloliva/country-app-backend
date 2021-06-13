const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const router = require('./api/api')

app.use(express.static(`${__dirname}/public`))

app.use(router)

app.listen(port, console.log(`server started at port: ${port}`))

// renders docs about the api
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

module.exports = app