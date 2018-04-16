var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },

  contentType: {
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true
  },

  anonymous: {
      type: boolean
  },

  videoUrl: {
    type: String,
    unique: true
  },

  imageUrl: {
    type: String,
    unique: true
  },

  author: {type: Schema.Types.ObjectId, ref: 'user'},

  status: {type: Schema.Types.ObjectId, ref: 'status'},

  topics: [{type: Schema.Types.ObjectId, ref: 'topic'}]
});

module.exports = mongoose.model('post', PostSchema);
