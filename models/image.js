var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
  title: {type: String, required: true},
  url: {type: String, required: true},
  createdAt: { type : Date, default: Date.now() }
});

// create a method directly on the model: `all`

ImageSchema.statics.all = function all(cb) {
  return
    this.model.find({})
    .catch(function(err) {
      console.log(err);
    })
    .then(function(images) {
      cb(images);
    })
  ;
}


// define the model
var Image = mongoose.model("Image", ImageSchema);
// export the model to any files that `require` this one
module.exports = Image;
