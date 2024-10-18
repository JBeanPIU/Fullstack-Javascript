// Program: a math competition website using EJS to test yourself & compete for a high score! 
// By: Cameron Beanland 
// Date: October 18th. 2024 


const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


/* -- EJS setup -- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // used for form submissions
app.use(express.static(path.join(__dirname, 'public'))); // gives static files


/* -- Routes setup -- */
const indexRouter = require('./routes/index');
app.use('/', indexRouter); // links outside of folder, finds routes and catches index.js

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
})

// mostly used to setup all the separate pages*
