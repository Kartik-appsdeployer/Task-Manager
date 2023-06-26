const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
var bodyParser = require("body-parser");
const cors = require('cors')


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/taskManager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});