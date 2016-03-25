var app = require('./config')

var imagesController = require('./controllers/imagesController');

app.get("/api/images", imagesController.index);
app.post("/api/images", imagesController.create);
app.delete("/api/images/:id", imagesController.destroy);
