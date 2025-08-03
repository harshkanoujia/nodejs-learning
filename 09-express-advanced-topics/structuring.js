//In this file we want to maintain the structure and routes folder is used in this file and also middleware folder is used for this file and we used in it
const courses = require('./routes/courses')
const home = require('./routes/home')
const logger = require('./middleware/logger')
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require("express");
const app = express();

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];


app.set('view engine', 'pug')   // When we buliding restful sevices of backend of your client applications we do not need the view engine or template engine
app.set('views', './views');    // default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));    // this middleware function is parses the incoming request with urlencoded like(key=value&key=value)
app.use(express.static('public'))
app.use(helmet());

app.use('/api/courses', courses);
app.use('/', home);

console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

app.use(logger);

const port = process.env.PORT || 5000;   // process.env.PORT is an environment variables || 5000 is not working on when we deploy a project so this is important   
app.listen(port, () => console.log(`Listening the port ${port}`))
