'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/looger.js');
const validator = require('./middleware/validator');
const app = express();
///middelewares
app.use(logger);
app.use(express.json());
//http://localhost:3000/person?name=
app.get('/person', validator, (req, res) => {
    const output = {
        name: req.query.name,
    }
    res.json(output);
})



app.use('*', notFoundHandler);
app.use(errorHandler)

module.exports = {
    app: app,
    start: (port) => {
        const PORT = port || 3030;
        app.listen(PORT, () => {
            console.log(`Listening to ${PORT}`);
        })
    }
};