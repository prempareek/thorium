const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://premjoshi:CAeCnXX70lt2hET5@cluster0.7vw4v.mongodb.net/new?authSource=admin&replicaSet=atlas-10yy5l-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {useNewUrlParser: true})
     .then(() => console.log('mongodb connected'))
	 .catch(err => console.log(err))
	 
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});