const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;
const cors = require('cors');
const app = express();
const massive = require('massive');
const masterRoutes = require ('./server/masterRoutes');
const session = require('express-session');
const config = require('./server/config');

app.use(cors());
app.use(bodyParser.json());
app.use(session(config.session));
app.use('/', express.static(__dirname + '/public'));
massive(config.postgres).then(dbInstance => {
  app.set('db', dbInstance)
});
masterRoutes(app);


app.listen(port, () => {
  console.log('Whatchu want?');
});
