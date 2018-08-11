app.controller('ResumenCtrl', function ($scope, $rootScope , $window, $stateParams, $ionicActionSheet, $timeout, ionicMaterialInk, $http, $ionicLoading, $ionicPopup) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
    //tipo de usuario 0:empresa, 1: agrupacion, 2:participante y 3:publico
    $scope.tipoUser = 3;
    

    //alert('resumen');

    $scope.$on("$ionicView.beforeEnter", function(event, data){
        
      $ionicLoading.show({
          template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
      });
        if ($rootScope.valor == 0) {
          $window.location.reload();
          $rootScope.valor = 1;
        }
        
        if ($scope.tipoUser == 0) {// es tipo empresa
          $scope.resporteEmpresa();
        }else{
          if ($scope.tipoUser == 1) {// es tipo agrupacion
            $scope.resporteAgrupacion();
          }else{
            if ($scope.tipoUser == 2) {//es tipo participante
             $scope.resporteParticipante(); 
            }else{
              $scope.resportePublico();
            }
            
          }
        }

        
    });

    $scope.resporteEmpresa = function(){


      $http({
          url: path + 'evento/inicioempresa',
          method: 'get',
          headers: {
              "Content-Type": "application/json"
          }
      }).success(function (response) {
        
        $scope.cantEventos = response.eventos;
        $scope.cantEmpresas = response.empresas;
        //tipo de empresas
        $scope.tipoEmpresa = response.tipoEmpresa;
        //cantidad de hoteles , restaurantes, lugares y agrupaciones
        $scope.hoteles = response.hoteles;
        $scope.restaurantes = response.restaurantes;
        $scope.participantes = response.participantes;
        $scope.agrupaciones = response.agrupaciones;
        //cantidad de empresas patrocinadoras, proeedoras y consumidoras
        $scope.cantidadTipoEmpresa = response.cantidadEmpresa;
        //llenado de graficas
        $scope.labels = ["Patrocinadoras", "Proveedoras", "Consumidoras"];
        $scope.data = [$scope.cantidadTipoEmpresa.patrocinadoras, $scope.cantidadTipoEmpresa.proveedoras, $scope.cantidadTipoEmpresa.consumidoras];
        $scope.cantEmpleos = response.cantidadEmpleos;

        //HORAS
        $scope.horasPasadas = response.horasPasadas;
        $scope.horasProximas = response.horasProximas;
        console.log($scope.horasPasadas, $scope.horasProximas);
        //capacidad de personas proyectadas (la suma de los palcos)
        $scope.cantPersona = response.capacidad;
        //console.log($scope.cantidadTipoEmpresa);
        $ionicLoading.hide();
      });
    }

    $scope.resporteAgrupacion = function(){
      

      $http({
          url: path + 'evento/inicioagrupacion',
          method: 'get',
          headers: {
              "Content-Type": "application/json"
          }
      }).success(function (response) {
        
        $scope.cantEventos = response.eventos;
        $scope.cantEmpresas = response.empresas;
        //cantidad de agrupaciones
        $scope.cantAgrupaciones = response.agrupaciones;
        //cantidad de artistas
        $scope.cantArtista = response.artistas;
        //totales
        $scope.hoteles = response.hoteles;
        $scope.restaurantes = response.restaurantes;
        $scope.empresas = response.empresas;
        $scope.participantes = response.participantes;
        //grafica
        $scope.labels = [''];
        $scope.series = response.genero;

        $scope.data = response.cantidadGenero;

        //promedio de mujeres y hombres
        $scope.promHombres = response.promHombres;
        $scope.promMujeres = response.promMujeres;

        //HORAS
        $scope.horasPasadas = response.horasPasadas;
        $scope.horasProximas = response.horasProximas;

        //capacidad de personas proyectadas (la suma de los palcos)
        $scope.cantPersona = response.capacidad;
        //console.log($scope.cantidadTipoEmpresa);
        $ionicLoading.hide();
      });
    }

    $scope.resporteParticipante = function(){
      
      $http({
          url: path + 'evento/inicioparticipante',
          method: 'get',
          headers: {
              "Content-Type": "application/json"
          }
      }).success(function (response) {
        
        $scope.cantEventos = response.eventos;

        //capacidad de personas proyectadas (la suma de los palcos)
        $scope.cantPersona = response.capacidad;
        //cantidad de participantes 
        $scope.cantParticipantes =response.participantes;
        //totales
        $scope.hoteles = response.hoteles;
        $scope.restaurantes = response.restaurantes;
        $scope.empresas = response.empresas;
        $scope.agrupaciones = response.agrupaciones;

        //participantes juridicos y naturales grafica
        $scope.juridicos = response.juridicos;
        $scope.naturales = response.naturales;
        $scope.labels = ["Juridicos", "Naturales"];
        $scope.data = [$scope.juridicos, $scope.naturales];

        //promedio de mujeres, hombres
        $scope.promHombres = response.hombres;
        $scope.promMujeres = response.mujeres;

        //HORAS
        $scope.horasPasadas = response.horasPasadas;
        $scope.horasProximas = response.horasProximas;

        //cantidad de premio
        $scope.premio = response.premio;
        
        //console.log($scope.cantidadTipoEmpresa);
        $ionicLoading.hide();
      });
    }

    $scope.resportePublico = function(){
      

      $http({
          url: path + 'evento/iniciopublico',
          method: 'get',
          headers: {
              "Content-Type": "application/json"
          }
      }).success(function (response) {
        
        $scope.cantEventos = response.eventos;

        //capacidad de personas proyectadas (la suma de los palcos)
        $scope.cantPersona = response.capacidad;

        //cantidad de hoteles , restaurantes, lugares y agrupaciones
        $scope.hoteles = response.hoteles;
        $scope.restaurantes = response.restaurantes;
        $scope.lugares = response.lugares;
        $scope.agrupaciones = response.agrupaciones;

        $scope.actividades = response.actividades;

        //HORAS
        $scope.horasPasadas = response.horasPasadas;
        $scope.horasProximas = response.horasProximas;
        
        $scope.labels = [''];
        $scope.series = ['Sin valor comercial', 'Con boleta de ingreso', 'Con valor comercial'];

        $scope.data = [
          [65],
          [28],
          [15]
        ];
        //console.log($scope.cantidadTipoEmpresa);
        $ionicLoading.hide();
      });
    }


    $scope.showPopupHotel = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Contamos con '+ $scope.hoteles+' Hoteles',
            template: 'Estan distribuidos en todas las ciudades donde realizamos nuestros eventos, si ingresas a los detalles de un evento podras ver como llegar a los hotes mas cercanos.'
        });
    };

    $scope.showPopupRestaurante = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Contamos con '+ $scope.restaurantes+' Restaurantes',
            template: 'Estan distribuidos en todas las ciudades donde realizamos nuestros eventos, si ingresas a los detalles de un evento podras ver como llegar a los restaurantes mas cercanos.'
        });
    };

    $scope.showPopupLugares = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Contamos con '+ $scope.lugares+' Lugares Turisticos',
            template: 'Estan distribuidos en todas las ciudades donde realizamos nuestros eventos, si ingresas a los detalles de un evento podras ver como llegar a los lugares turisticos mas cercanos.'
        });
    };

    $scope.showPopupAgrupacion = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Contamos con '+ $scope.agrupaciones+' Agrupaciones Musicales',
            template: 'Estan distribuidas en todas las ciudades donde realizamos nuestros eventos.'
        });
    };

    $scope.showPopupParticipante = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Contamos con '+ $scope.participantes+' Participantes',
            template: 'Estan distribuidas en todas las ciudades donde realizamos nuestros eventos.'
        });
    };
    $scope.showPopupEmpresa = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Contamos con '+ $scope.empresas+' Empresas',
            template: 'Estan distribuidas en todas las ciudades donde realizamos nuestros eventos. Que pueden patrocinar y ofrecer sus servicios en los distintos eventos'
        });
    }; 

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
            }, {
                text: '<i class="icon fa fa-child" style="padding-left:2% !important"></i> Público'
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
                  $scope.tipoUser = 0; 
                  $scope.resporteEmpresa();
                }else{
                  if (index == 1) {// es tipo agrupacion
                    $scope.tipoUser = 1; 
                    $scope.resporteAgrupacion();
                  }else{
                    if (index == 2) {//es tipo participante
                      $scope.tipoUser = 2; 
                      $scope.resporteParticipante(); 
                    }else{
                      $scope.tipoUser = 3; 
                      $scope.resportePublico();
                    }
                    
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




    
    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});