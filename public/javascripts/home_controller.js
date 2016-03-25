app.controller('HomeController', HomeController);

HomeController.$inject = ["Image"];

function HomeController(Image) {
  var vm = this;
  vm.homeTest = "Welcome to the homepage!";
  vm.images = Image.query();
}
