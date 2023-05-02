const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

var path = require('path');
const app = express();

var login = 'admin';
var password = '123456';

app.use(session({
    secret: 'kjabdu12ye0j102he7'
}));
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/', (req, res) => {
    if (req.body.password == password && req.body.login == login) {
        req.session.login = login;
        res.render('logado');
    } else {
        res.render('index');
    }
})

app.get('/', (req, res) => {
    if (req.session.login) {
        res.render('logado')
    } else {
        res.render('index');
    }
});

app.listen(3001, () => {
    console.log('Servidor rodando');
});