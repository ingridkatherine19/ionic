app.controller('DetalleEventoCtrl', function($state, $scope, $ionicActionSheet, $rootScope,$ionicLoading, $http, $ionicLoading, $ionicScrollDelegate , ionicMaterialMotion){
    
  $scope.detalleAct = 0;
  $rootScope.detaCosto = 0;
  $rootScope.detaIngreso = 0;
  $rootScope.detaAct = 0;

  $scope.$on("$ionicView.beforeEnter", function(event, data){
	      $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });
        console.log($rootScope.eventoDetalle);
        if (!$rootScope.eventoDetalle) {
          $ionicLoading.hide();
          $state.go('app.Evento');
        }else{
          //consultas
          $scope.inicio();
          $scope.allSocio();
        }
	});
   
  $scope.$on('$ionicView.enter', function(e) {
  
  });

  $scope.inicio = function(){
    
    $http({
        url: path + 'evento/iniciodetalle',
        method: 'get',
        params:{
          idEvento: $rootScope.eventoDetalle.idEvento
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $scope.totales = response.total;
      //console.log($scope.totales);
      $ionicLoading.hide();
    });
  }



  $scope.buscarHoteles = function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'evento/hotel',
        method: 'get',
        params:{
          departamento: $rootScope.eventoDetalle.idDepartamento,
          ciudad: $rootScope.eventoDetalle.idCiudad
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.hoteles = response.hoteles;
      //console.log($rootScope.hoteles);
      $state.go('app.Hotel');
      $ionicLoading.hide();
    });
  }

  $scope.buscarRestaurantes = function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'evento/restaurante',
        method: 'get',
        params:{
          departamento: $rootScope.eventoDetalle.idDepartamento,
          ciudad: $rootScope.eventoDetalle.idCiudad
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.restaurantes = response.restaurantes;
      //console.log($rootScope.restaurantes);
      $state.go('app.Restaurante');
      $ionicLoading.hide();
    });
  }

  $scope.buscarLugares = function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'evento/lugar',
        method: 'get',
        params:{
          departamento: $rootScope.eventoDetalle.idDepartamento,
          ciudad: $rootScope.eventoDetalle.idCiudad
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.lugares = response.lugares;
      //console.log($rootScope.lugares);
      $state.go('app.Lugar');
      $ionicLoading.hide();
    });
  }

  $scope.buscarInfo = function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'evento/info',
        method: 'get',
        params:{
          idEvento: $rootScope.eventoDetalle.idEvento
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.info = response.info;
      //console.log($rootScope.info);
      $state.go('app.Info');
      $ionicLoading.hide();
    });
  }

  $scope.allSocio = function(){
    $http({
        url: path + 'socio/reporte',
        method: 'get',
        params: {
          idEvento: $rootScope.eventoDetalle.idEvento
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $scope.totalEmpleo = response.empleos;
      //$scope.totalEmpresa = response.empresas;
    
    });
  }

  $scope.buscarJunta = function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'evento/junta',
        method: 'get',
        params:{
          idEvento: $rootScope.eventoDetalle.idEvento
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.junta = response.junta;
      //console.log($rootScope.junta);
      $state.go('app.Junta');
      $ionicLoading.hide();
    });
  }

  $scope.buscarEmpresasP = function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'evento/empresap',
        method: 'get',
        params:{
          idEvento: $rootScope.eventoDetalle.idEvento
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.patrocinadoras = response.patrocinadoras;
      console.log($rootScope.patrocinadoras);
      $state.go('app.EmpresasP');
      $ionicLoading.hide();
    });
  }

  $scope.buscarEmpresasC = function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'evento/empresac',
        method: 'get',
        params:{
          idEvento: $rootScope.eventoDetalle.idEvento
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.colaboradoras = response.colaboradoras;
      //console.log($rootScope.colaboradoras);
      $state.go('app.EmpresasC');
      $ionicLoading.hide();
    });
  }

  $scope.comollegar = function(e){
    $rootScope.direccionSelect = $rootScope.eventoDetalle;
    console.log($rootScope.direccionSelect);
    $state.go('app.Comollegar');
  }
  $scope.comollegar2 = function(e){
 
    $rootScope.direccionSelect = e;
   // console.log($rootScope.direccionSelect);
    $state.go('app.Comollegar');
  }


  $scope.buscarActividades= function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'evento/actividad',
        method: 'get',
        params:{
          idEvento: $rootScope.eventoDetalle.idEvento
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.actividades = response.actividades;
      console.log($rootScope.actividades);
      $state.go('app.Actividad');
      $ionicLoading.hide();
    });
  }

  $scope.verSubAct = function(index){
    if ($scope.actividades[index].detalle == 1) {
      $scope.actividades[index].detalle = 0;
    }else{
      $scope.actividades[index].detalle = 1;
    }
     
  }

  $scope.tipoInteres = function(){
    $rootScope.tipoUser = 0; 
    $state.go('app.Interes');
    $scope.interesEmpresa();

  }


  $scope.interesEmpresa= function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'evento/interese',
        method: 'get',
        params:{
          idEvento: $rootScope.eventoDetalle.idEvento
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.actividades = response.actividades;
      //cosas que nos pueden proveer las empresas
      $rootScope.costos = response.costos;
      //cosas que podemos ofrecerle a las empresas
      $rootScope.ingresos = response.ingresos;

      $ionicLoading.hide();
    });
  }

  $scope.interesAgrupacion= function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'evento/interesa',
        method: 'get',
        params:{
          idEvento: $rootScope.eventoDetalle.idEvento
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.actividades = response.actividades;
      
      $ionicLoading.hide();
    });
  }
  
  $scope.interesParticipante= function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'evento/interesp',
        method: 'get',
        params:{
          idEvento: $rootScope.eventoDetalle.idEvento
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.actividades = response.actividades;
      
      $ionicLoading.hide();
    });
  }
  
  
  $scope.detalleCosto = function(){
    if ($rootScope.detaCosto == 0) {
      $rootScope.detaCosto = 1;
    }else{
      $rootScope.detaCosto = 0;
    }
  }
  $scope.detalleIngreso = function(){
    if ($rootScope.detaIngreso == 0) {
      $rootScope.detaIngreso = 1;
    }else{
      $rootScope.detaIngreso = 0;
    }
  }
  $scope.detalleActividad = function(){
    if ($rootScope.detaAct == 0) {
      $rootScope.detaAct = 1;
    }else{
      $rootScope.detaAct = 0;
    }
  }

  // Triggered on a button click, or some other target
    $scope.actionSheet = function() {
      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
          buttons: [{
              text: '<i class="icon fa fa-building" style="padding-left:2% !important"></i> Empresa'
          }, {
              text: '<i class="icon fa fa-music" style="padding-left:2% !important"></i> Agrupación'
          }, {
              text: '<i class="icon fa fa-group" style="padding-left:2% !important"></i> Participante'
          }],
          //destructiveText: 'Delete',
          titleText: 'Modifica el tipo de usuario',
          //cancelText: 'Cancel',
          //cancel: function() {
              // add cancel code..
          //},
          buttonClicked: function(index) {

              $ionicLoading.show({
                  template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
              });
              if (index == 0) {// es tipo empresa
                $rootScope.tipoUser = 0; 
                $scope.interesEmpresa();
              }else{
                if (index == 1) {// es tipo agrupacion
                  $rootScope.tipoUser = 1; 
                  $scope.interesAgrupacion();
                }else{
                    //es tipo participante
                    $rootScope.tipoUser = 2; 
                    $scope.interesParticipante(); 
                }
              }
             return true;
          }
      });

      // For example's sake, hide the sheet after two seconds
      /*$timeout(function() {
          hideSheet();
      }, 2000);*/

  };
});
