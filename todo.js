

const mongoose = require('mongoose');
 
mongoose.set('useFindAndModify', false);
 
/*mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });
 
const db = mongoose.connection;
*/
const mongodbConnectionString ='mongodb://localhost/gloriousdb';
mongoose.connect(mongodbConnectionString, {
  useMongoClient:true
})

 .then(function() {
  console.log("MongoDB Connected");
 })
 .catch(function(error) {
  console.log("error Connecting to mongodb: " + error);
 });
/*db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function(){
  console.log('Connected to MongoDb!');
});*/
 
const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean
})
 
todoSchema.statics.all = function(callback){
  return Todo.find({}, function(err, todos){
    callback({todos: todos });
  })
}
 
const Todo = mongoose.model('Todo', todoSchema);
 
module.exports= Todo;