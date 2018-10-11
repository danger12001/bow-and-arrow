var express = require('express');
var app = express();
var path = require('path');
var handlebars = require('express-handlebars');
const port = 3000
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('game'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))