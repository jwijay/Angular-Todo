var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema ({
  title : { 
    type : String,
    required : true
  },
  completed : {
    type : Boolean,
    default : false
  }
});

module.exports = mongoose.model('todos', todoSchema);