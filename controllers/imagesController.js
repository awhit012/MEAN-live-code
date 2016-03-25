var Image = require("../models/image");

var imagesController = {
  index: function(req, res) {
    Image.find({}, function(err, images) {
      // send back a JSON response of all the images, reverse-ordered
      res.status(200).send(JSON.stringify(images.reverse()));
    })
  },
  create: function(req, res) {
    console.log(req.body)
    var title = req.body.title;
    var url = req.body.url;
    Image.create({title: title, url: url}, function(err, image) {
      console.log('error from create', err)
      // err ?
      //   // handle error
      //   res.status(500).send() :
      //   // handle success
      //   res.status(201).send(JSON.stringify(image));
    });
  },
  destroy: function(req, res) {
    Image.remove({_id: req.params.id}, function(err, image) {
      err ?
        res.status(500).send() :
        res.status(204).send(JSON.stringify(image));
    })
  }
}

module.exports = imagesController;
