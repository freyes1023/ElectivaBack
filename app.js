var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 3000;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require ('./routes/products')

app.use('/', indexRouter);
app.use('/users', usersRouter);


//app.use("/", indexRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

module.exports = app;
