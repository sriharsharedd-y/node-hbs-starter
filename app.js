const Handlebars = require('handlebars');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const required = require('./js/required');

app.set('view engine', 'hbs');
app.use(express.static('css'));

let html;
const template = Handlebars.compile(fs.readFileSync('./hbs/index.hbs', 'utf8'));

app.get('/', (req, res) => {
    html = template(required.data);
    res.send(html);
});
  
app.get('/page2', (req, res) => {
    html = template(required.data2);
    res.send(html);
});

app.get('/page3', (req, res) => {
    html = template(required.data3);
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});
