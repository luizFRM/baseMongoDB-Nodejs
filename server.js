const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const hostname = 'localhost';
const port = 3001;

const app = express();
app.use(express.json());
app.use(cors()); // da pra colocar algumas informações de segurança, quais dominios podem ser acessados, dentro dos parenteses
app.use(fileUpload());

mongoose.connect(
	'mongodb://localhost:27017/baseMongo',
	{ useNewUrlParser: true }
);


app.use('/api', require('./src/routes'));
app.listen(port);
console.log(`Server running at http://${hostname}:${port}/`);
