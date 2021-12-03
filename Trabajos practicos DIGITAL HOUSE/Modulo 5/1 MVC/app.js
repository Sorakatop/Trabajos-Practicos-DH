const express = require('express');
const app = express();

app.use(express.static('public'));

const mainRouter = require('./router/main');

app.use('/', mainRouter);

app.listen(3000, () => {
    console.log('Servidor funcionando');
});