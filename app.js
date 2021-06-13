const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const router = require('./api/api')

app.use(express.static(`${__dirname}/views`))
app.set('view engine', 'ejs')

// renders docs about the api
app.get('/', (req, res) => {
    res.render('index', { host: `${req.protocol}://${req.get('host')}` })
})

app.use(router)

app.listen(port, console.log(`server started at port: ${port}`))

module.exports = app