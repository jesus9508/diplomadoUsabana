const express = require('express');
const app = express();
app.get('/index', (req, res) =>
    res.send('Hola desde el micro de Jesus Jimenez Diplomado Usabana argocd!'));
app.listen(3000);