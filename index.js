const express = require('express')
const app = express();

app.get('/', function (req, res) {
    res.send('Welcome')
})

app.get('/sobre', function (req, res) {
    res.send('my page')
})

app.get('/blog', function (req, res) {
    res.send("Welcome to my blog")
})

app.get('/ola/:nome/:cargo',function(req, res){
    res.send('<h1>Ola '+req.params.nome+'</h1>'+'<h2>Seu cargo e: '+req.params.cargo+'</h2>')

})

app.listen(8080, function () {
    console.log('SERVER ON\n PORT: 8080')
});