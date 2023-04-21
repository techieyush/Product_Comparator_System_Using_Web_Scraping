var app=angular.module('myMod',['']);
app.controller('myController', function($scope, $location) {
    // Define a function to redirect to another page
    $scope.goToPage = function(path) {
      $location.path('./Books.html');
    };
  });
  













// app.config(["routeRrovider",function($routeProvider){
//  $routeProvider.
// when("/#!Mobile",{
//     templateUrl:"Mobile.html"
// }).
// when("/#!Laptop",{
//     templateUrl:"Laptop_two.html"
// }).
// when("/#!Watch",{
//     templateUrl:"Watches.html"
// }).
// when("/#!Novel",{
//     templateUrl:"Books.html"
// }).
// otherwise({
//     redirectTo:"index.html"
// });
// }])

// app.controller('myController',function(){

    
   
// });
