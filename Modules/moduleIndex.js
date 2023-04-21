var app=angular.module('myModIndex',[]);
app.controller('myControllerIndex', function($scope, $location,$window) {
    
    $scope.Mobile=function()
    {
      $window.open('./Mobile.html','_self');
    }
    $scope.Laptop=function()
    {
      $window.open('./Laptop.html','_self');
    }
    $scope.Watches=function()
    {
      $window.open('./Watches.html','_self');
    }
    $scope.Books=function()
    {
      $window.open('./Books.html','_self');
    }
    
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
