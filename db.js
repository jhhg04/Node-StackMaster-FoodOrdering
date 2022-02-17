const mongoose = require('mongoose');

var mongoURLLocal = 'mongodb://localhost/testPizza';
var mongoURL =
  'mongodb+srv://john:asdf1234@cluster0.rq8mm.mongodb.net/mern-pizza';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
// mongoose.connect(mongoURLLocal, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

var db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB Connection Seccessfully');
});

db.on('error', () => {
  console.log('MongoDB Connection Failed');
});

module.exports = mongoose;
