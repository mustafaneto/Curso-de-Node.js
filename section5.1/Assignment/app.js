const path = require('path');
const express = require('express');

const app = express();

const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoutes);
app.use('/users', usersRoutes);

app.listen(3000);

