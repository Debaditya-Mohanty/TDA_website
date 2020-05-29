// getting-started.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected!")
});

var kittySchema = new mongoose.Schema({
    name: String
  });


kittySchema.methods.speak = function () {
    var greeting = this.name
    console.log(greeting);
  }
  
var Kitten = mongoose.model('mydata', kittySchema);



var silence = new Kitten({ name: 'notme1' });
console.log(silence.name); // 'Silence'

silence.speak()

silence.save(function (err, fluffy) {
    if (err) return console.error(err);
    silence.speak();
  });

Kitten.find({name :"Silence"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })
