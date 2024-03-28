const express = require('express');
const app = express();

const homeRoute = require("./HomepageRoute");
const bagRoute = require('./BagRoute');

const port = 3000;

app.use('/api', homeRoute);
app.use('/bag', bagRoute);

app.listen(port, ()=> console.log(`🚀 Server running on port ${port}`));