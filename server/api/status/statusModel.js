var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatusSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('status', StatusSchema);
