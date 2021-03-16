const express = require('express')
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//Config
//Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//DataBase MySQL conncetion

const sequelize = new Sequelize('teste', 'root', '12345', {
    host: "localhost",
    dialect: 'mysql'
})


app.listen(8080, function () {
    console.log('SERVER ON\n PORT: 8080')
});