app.controller('PerfilCtrl', function ($scope, $stateParams, $ionicActionSheet, $timeout, ionicMaterialInk, $http, $ionicLoading, $ionicPopup , $rootScope) {
    ionicMaterialInk.displayEffect();
    //tipo de usuario 0:empresa, 1: agrupacion, 2:participante y 3:publico
   $scope.vista = 0;   
   $scope.titulo = "";
    $scope.$on("$ionicView.beforeEnter", function(event, data){
        
      $ionicLoading.show({
          template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
      });
      console.log();

       if ($rootScope.user.tipo == 1) {// empresa
         $scope.perfilEmpresa();
         $scope.titulo = 'Empresa';
       //  $scope.perfilAgrupacion();
        }else{
          if ($rootScope.user.tipo == 2) {// agrupacion
         
            $scope.titulo = 'Agrupación';
            $scope.perfilAgrupacion();
          }else{
            if ($rootScope.user.tipo == 3) {//participante
             $scope.titulo = 'Participante';
             $scope.perfilParticipante(); 
            }else{
            //  $scope.resportePublico();
            }
            
          }
        }
    });

    $scope.cambiarVista = function(valor){
      if (valor == 0) {
        $scope.vista = 0;
      }else{
        if (valor == 1) {
          $scope.vista = 1;
        }else{
          if (valor == 2) {
            $scope.vista = 2;
          }
        }
      }
    }
    $scope.perfilEmpresa = function(){
      $http({
          url: path + 'perfil/empresa',
          params: {
            user: $rootScope.user
          },
          method: 'get',
          headers: {
              "Content-Type": "application/json"
          }
      }).success(function (response) {
        $scope.empresa = response.empresa;
        console.log($scope.empresa);
        $ionicLoading.hide();
      });
    }
    $scope.perfilAgrupacion = function(){
      $http({
          url: path + 'perfil/agrupacion',
          params: {
            user: $rootScope.user
          },
          method: 'get',
          headers: {
              "Content-Type": "application/json"
          }
      }).success(function (response) {
        $scope.agrupacion = response.agrupacion;
        console.log($scope.agrupacion);
        $ionicLoading.hide();
      });
    }
    $scope.perfilParticipante = function(){
      $http({
          url: path + 'perfil/participante',
          params: {
            user: $rootScope.user
          },
          method: 'get',
          headers: {
              "Content-Type": "application/json"
          }
      }).success(function (response) {
        $scope.participante = response.participante;
        console.log($scope.participante);
        $ionicLoading.hide();
      });
    }

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});