app.config(config);
// app.factory('Image', ImageFactory);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  console.log('config');
  //this allows us to use routes without hash params!
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  // for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");

   $stateProvider
    .state('home', {
      url: "/",
      controller: 'HomeController',
      templateUrl: 'templates/home.html'
    });
}

app.service('Image', function($resource){
  return $resource('http://localhost:3000/api/images/:id', { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});
