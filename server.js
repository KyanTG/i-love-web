import express from 'express'

const app = express()

app.use(express.static('public'))


app.use(express.urlencoded({extended: true}))


import { Liquid } from 'liquidjs';


const engine = new Liquid();
app.engine('liquid', engine.express()); 


app.set('views', './views')





app.get('/', async function (request, response) {
    response.render('home.liquid')
})

app.get('/portfolio', async function (request, response) {
    response.render('portfolio.liquid')
})

app.get('/extras', async function (request, response) {
    response.render('extras.liquid')
})

app.get('/voortgang', async function (request, response) {
    response.render('voortgang.liquid')
})




app.set('port', process.env.PORT || 8000)


app.listen(app.get('port'), function () {

    console.log(`Application started on http://localhost:${app.get('port')}`)
})