app.controller('LoginCtrl', function($state, $scope, $ionicLoading, $rootScope, $http, $ionicLoading, $ionicScrollDelegate, $ionicPopup , $ionicHistory){
   $scope.user = {}; // Inicializando


  $scope.$on("$ionicView.beforeEnter", function(event, data){
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });
      
       
  });
    $scope.$on('$ionicView.enter', function(e) {
      $ionicLoading.hide();
    });

  $scope.login = function(){
    $http({
        url: path + 'usuarioapp/login',
        method: 'get',
        params: {
            correo: $scope.user.correo,
            password: $scope.user.password
        },
        headers: {
            "Content-Type": "application/json",
        }

    }).success(function (response) {
        $ionicLoading.hide();
        if (response.user) {
            user = response.user;
            $rootScope.user = response.user;
            localStorage.setItem('user', JSON.stringify(user));
            $ionicLoading.show({
              template: 'Bienvenido ' + $rootScope.user.nombre+ ' ',
              duration: 2000
            }).then(function(){
               
            });
            $rootScope.valor = 0;
            $state.go('app.resumen');
        } else {
          $ionicLoading.show({
            template: 'Correo o contraseña incorrecta',
            duration: 2000
          }).then(function(){
             
          });
        }
    }).error(function (response) {
     
        //console.log(response)
    });
  }
  

});
