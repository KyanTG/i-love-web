import express from 'express'

const app = express()

app.use(express.static('public'))


app.use(express.urlencoded({extended: true}))

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {

    console.log(`Application started on http://localhost:${app.get('port')}`)
})