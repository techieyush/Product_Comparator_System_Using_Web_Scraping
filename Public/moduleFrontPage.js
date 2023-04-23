var app=angular.module('myModFront',[]);
app.controller('myControllerFront', function($scope, $location,$window) {
    
    $scope.Login=function()
    {
      $window.open('./login.html','_self');
    }
    $scope.Register=function()
    {
      $window.open('./RegisterPage.html','_self');
    }
   
});
  














