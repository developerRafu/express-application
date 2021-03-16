const express = require('express')
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

//Config
//Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/cad', function (req, res) {
    res.render('form')
})

app.post('/add', function (req, res) {
    res.send('Texto: ' + req.body.titulo + "\nConteudo: " + req.body.content)
})

//Fim da conexão
app.listen(8081, function () {
    console.log('SERVER ON\n PORT: 8081')
});