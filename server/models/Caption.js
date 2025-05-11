const mongoose = require('mongoose');

const captionSchema = new mongoose.Schema({
  platform: String,
  niche: String,
  tone: String,
  caption: String,
  hashtags: [String],
});

const Caption = mongoose.model('Caption', captionSchema);

module.exports = Caption;