const express = require('express');
const morgan = require('morgan');
const app = express();

//const {mongoose} = require('./database');

//settings

const indexRoutes = require('./routes/routes');
//app.set('port',process.env.PORT || 3000);
app.set('port', 3000);

//middleware
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes

app.use('/',indexRoutes);

//start


app.listen(app.get('port'), () => {
    console.log('server on port : '+ app.get('port'));
} );