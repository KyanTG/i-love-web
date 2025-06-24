import express from 'express'

import { Liquid } from 'liquidjs';

import { marked } from 'marked';

import { readdir, readFile } from 'node:fs/promises'

const app = express()

const engine = new Liquid();
app.engine('liquid', engine.express()); 


// markdowns opvragen

const files = await readdir('markdowns')

console.log(files)



app.use(express.static('public'))


app.use(express.urlencoded({extended: true}))



app.set('views', './views')





app.get('/', async function (request, response) {
    response.render('home.liquid')
});

app.get('/portfolio', async function (request, response) {
    response.render('portfolio.liquid')
});

app.get('/extras', async function (request, response) {
    response.render('extras.liquid')
});

app.get('/voortgang', async function (request, response) {
    response.render('voortgang.liquid', {files: files})
});

app.get('/new', async function(request, response) {
    response.render('new.liquid')
});

app.get('/voortgang/:slug', async function (request, response) {

    console.log(request.params.slug)


    const fileContents = await readFile('markdowns/' + request.params.slug + '.md', { encoding: 'utf8' })    
    const markedContent = marked.parse(fileContents)


    response.render('artikel.liquid', {fileContents: markedContent})
});



app.set('port', process.env.PORT || 8000)


app.listen(app.get('port'), function () {

    console.log(`Application started on http://localhost:${app.get('port')}`)
})