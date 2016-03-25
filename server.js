var app = require('./config')
var path = require('path');
var imagesController = require("./controllers/imagesController");
require('./routes')

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});


// Routes
// app.get("/", imagesController.home);



// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});
