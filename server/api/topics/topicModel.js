var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('topic', TopicSchema);
