app.controller('ConfiguracionCtrl', function($state, $scope,$ionicLoading, $rootScope, $http, $ionicLoading, $ionicScrollDelegate , ionicMaterialInk){
    ionicMaterialInk.displayEffect();
   	$scope.contrasena = '';
	  $scope.contrasena2 = '';
    $scope.contrasenaact = '';
    $scope.$on("$ionicView.beforeEnter", function(event, data){
		$rootScope.user = JSON.parse(localStorage.getItem('user'));
		console.log($rootScope.user);
    $rootScope.user.cedula = parseInt($rootScope.user.cedula);
    if ($rootScope.user.notificacion == 1) {
      $('#myCheckbox').attr('checked',true);
    }else{
      $('#myCheckbox').attr('checked', false); 
    }

    if ($rootScope.user.invitacion == 1) {
      $('#myCheckbox2').attr('checked',true);
    }else{
      $('#myCheckbox2').attr('checked', false); 
    }
	});
    $scope.$on('$ionicView.enter', function(e) {
    
    });


    $scope.irEditar = function(){
        $state.go('app.Editarperfil');
        $scope.usuario = $rootScope.user;
    }
    $scope.irEditarcontrasena = function(){
        $state.go('app.Editarcontrasena');
        $scope.usuario = $rootScope.user;
    }
    

  	$scope.editarPerfil = function(){
          $http({
            url: path + 'usuario/update',
            method: 'get',
            params:{
                user: $rootScope.user  
            },
            headers: {
                "Content-Type": "application/json",
            }

        }).success(function (response) {
          localStorage.setItem('user', JSON.stringify(response.usuario));
          $rootScope.user = JSON.parse(localStorage.getItem('user'));
		      console.log($rootScope.user);
          
          $ionicLoading.show({
            template: 'Los cambios fueron realizados con éxito',
            duration: 2000
          }).then(function(){
             
          });
        });
    }

    $scope.llenarContrasena = function(numero, contrasena) {
    	if (numero == 1) {
    		$scope.contrasena = contrasena;	
    	}else{
        if (numero == 2) {
          $scope.contrasena2 = contrasena;
        }else{
          if (numero == 3) {
          $scope.contrasenaact = contrasena;
          }
        }

    	}
    }

     $scope.compararPassword = function () {
        if ($scope.contrasena == $scope.contrasena2){
            //llama al metodo de actualizar la contrasena
            $scope.actualizarPassword();
        }else{
          $ionicLoading.show({
            template: 'La contraseña nueva no coinciden',
            duration: 2000
          }).then(function(){
             
          });
        }
    }

    $scope.CambiarSwitch = function (valor) {
     
      $http({
            url: path + 'usuario/cambiarswitch',
            method: 'get',
            params:{
                idUsuario: $rootScope.user.idUsuario,
                valor: valor
            },
            headers: {
                "Content-Type": "application/json",
            }

        }).success(function (response) {
            $rootScope.user = response.usuario;
            localStorage.setItem('user', JSON.stringify($rootScope.user));
            if (valor == 1) {
              if ($rootScope.user.notificacion == 1) {
                $('#myCheckbox').attr('checked',true);
              }else{
                $('#myCheckbox').attr('checked', false); 
              }
            }else{
              if ($rootScope.user.notificacion == 1) {
                $('#myCheckbox2').attr('checked',true);
              }else{
                $('#myCheckbox2').attr('checked', false); 
              }
            }


          $ionicLoading.show({
            template: 'Los cambios fueron realizados con éxito',
            duration: 2000
          }).then(function(){
             
          });
        });

    }
   

    $scope.actualizarPassword = function(){
    
        $http({
            url: path + 'usuario/changepassword',
            method: 'get',
            params:{
                idUsuario: $rootScope.user.idUsuario,
                password: $scope.contrasena,
                actual : $scope.contrasenaact,
                email : $rootScope.user.correo
            },
            headers: {
                "Content-Type": "application/json",
            }

        }).success(function (response) {
           $ionicLoading.show({
            template: 'Su contraseña ha actualizada con éxito',
            duration: 2000
          }).then(function(){
             
          });
        });
    }


});
