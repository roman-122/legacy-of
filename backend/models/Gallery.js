const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gallerySchema = new Schema({
  src: String,
  alt: String
})
  
module.exports = mongoose.model('Gallery', gallerySchema);