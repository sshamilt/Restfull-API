var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Album = require('./api/models/albumModel'),
  Comment = require('./api/models/commentModel'),
  Photo = require('./api/models/photoModel'),
  Post = require('./api/models/postModel'),
  Todo = require('./api/models/todoModel'),
  User = require('./api/models/userModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/RestApiDb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('Database is connected.');
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//var routes = require('./api/routes/todoListRoutes');
//routes(app);
app.use(require('./api/routes/albumRoutes'));
app.use(require('./api/routes/commentRoutes'));
app.use(require('./api/routes/photoRoutes'));
app.use(require('./api/routes/postRoutes'));
app.use(require('./api/routes/todoRoutes'));
app.use(require('./api/routes/userRoutes'));

app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);