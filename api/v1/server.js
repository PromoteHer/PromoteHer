const express = require('express');
const bodyParser = require('body-parser');
const v1Routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/v1', v1Routes);

app.listen(3001, () => {
    console.log('Server is listening on port 3001');
});