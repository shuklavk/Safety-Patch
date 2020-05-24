const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema.js');
const MONGO_PASS = require('./mongoPass');
const app = express();
const port = 4000;

const MONGO_URI = `mongodb+srv://user:${MONGO_PASS}@cluster0-x0olj.mongodb.net/test?retryWrites=true&w=majority`;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use(cors());

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
