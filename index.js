const express = require('express');
const mongoose = require('mongoose');
const port = 3002;
const app = express();

// middleware
app.use(express.static('public'));
// body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb://localhost:27017/net_ninja_jwt';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// import routes
const homeRouter = require('./router/home.route');
app.get('/smoothies', (req, res) => res.render('smoothies'));

// setting routes

app.use('/', homeRouter);

app.listen(port, () => {
    console.log(`Port in ${port}`)
})