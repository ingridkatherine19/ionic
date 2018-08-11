app.controller('DetalleEventoFCtrl', function($state, $scope, $rootScope , $http, $ionicLoading, $ionicScrollDelegate , ionicMaterialMotion , ionicMaterialInk , $ionicPopup){
    $scope.valor = 0;   
    ionicMaterialInk.displayEffect();  //Efecto del boton superior
    $scope.variableTipo = 0; //Verificando que sea culminado
    
  /* var fab = document.getElementById('fab'); // Capturando el valor del boton de encuesta
    fab.addEventListener('click', function () {
      $state.go('app.Encuesta');
    });*/
   
    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

  $scope.$on("$ionicView.beforeEnter", function(event, data){
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });

        if (!$rootScope.eventoDetalle) {
          $ionicLoading.hide();
          $state.go('app.Culminados');
        }else{
          //consultas
          $scope.inicio();
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
      console.log($scope.totales);
      $ionicLoading.hide();
    });
  }
  
  $scope.buscarEncuesta = function(){
    $state.go('app.Encuesta');
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
      console.log($rootScope.hoteles);
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
      console.log($rootScope.restaurantes);
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
      console.log($rootScope.lugares);
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
      console.log($rootScope.info);
      $state.go('app.Info');
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


  /*VALORACION*/

  $scope.buscarValor = function(){
    $http({
        url: path + 'valoracion/buscar',
        method: 'get',
        params:{
          idEvento: $rootScope.eventoDetalle.idEvento,
          idUsuario: $rootScope.user.idUsuario
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $scope.estrellas = response.valoracion;
    });
  }

  $scope.meGusta = function (cant){
     $scope.valor = cant;
  }
 
  $scope.showPopup = function() {//Popup para agregar comentario
         $scope.comentario = {};

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<center><div class="ec-stars-wrapper"><a data-value="1" value="1" title="Votar con 1 estrellas" ng-model="valor"  ng-click="meGusta(1)">&#9733;</a><a data-value="2" id="2" value="2" title="Votar con 2 estrellas" ng-model="valor" ng-click="meGusta(2)">&#9733;</a><a data-value="3"  id="3" value="3" title="Votar con 3 estrellas" ng-model="valor" ng-click="meGusta(3)">&#9733;</a><a data-value="4" id="4" value="4" title="Votar con 4 estrellas" ng-model="valor" ng-click="meGusta(4)">&#9733;</a><a data-value="5" id="5" value="5" title="Votar con 5 estrellas" ng-model="valor" ng-click="meGusta(5)">&#9733;</a></div></center>',
     title: 'Valoración',
     scope: $scope,
     buttons: [
       { text: '<i class="icon ion-ios-close-empty"></i>' },
       {
         text: '<b><i class="icon ion-ios-checkmark-empty"></i></b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.comentario) {
               $ionicLoading.show({
                template: 'Debe seleccionar una opción',
                duration: 2000
              }).then(function(){
                 
              });
              e.preventDefault();
           } else {
            console.log($scope.valor);
            $scope.agregarValoracion( $scope.valor);
             return $scope.comentario;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
   });
  };

  $scope.agregarValoracion = function( valor){//Agregar comentario
        $http({
            url: path + 'add/valoracion',
            method: 'get',
            params:{
                valor: valor,
                idEvento: $rootScope.eventoDetalle.idEvento, //Por defecto
                idUsuario: $rootScope.user.idUsuario,
                tipoPersona: $rootScope.user.tipo
            },
            headers: {
                "Content-Type": "application/json",
            }

        }).success(function (response) {
            if (response.error == false) {
              $scope.estrellas = response.valoracion;
              $ionicLoading.show({
                template: 'La valoración fue realizada con éxito',
                duration: 2000
              }).then(function(){
                  $scope.buscarValor(); 
              });
             
            }else{
              $ionicLoading.show({
                template: 'La valoración no puede ser realizada, intentelo de nuevo',
                duration: 2000
              }).then(function(){
                 
              });
            }
  
        });
  }
  $scope.buscarValor();
  /* ENCUESTA */
  $scope.respuesta = [
        {
            id:0,
            respuesta: 1
        },
        {
            id:1,
            respuesta: 1
        },
        {
            id:2,
            respuesta: 1
        },
        {
            id:3,
            respuesta: 1
        },
        {
            id:4,
            respuesta: 1
        },
        {
            id:5,
            respuesta: 1
        },
        {
            id:6,
            respuesta: 1
        },
        {
            id:7,
            respuesta: 1
        },
        {
            id:8,
            respuesta: 1,
            comentario: ''
        },
    ];

   $('.pregunta1 div').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var active = document.querySelector(".act");
    active.classList.remove("act");
        $this.closest('div').children('div').removeClass('act');
        $this.toggleClass('act');

    });
  $('.pregunta2 div').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var active = document.querySelector(".act2");
    active.classList.remove("act2");
        $this.closest('div').children('div').removeClass('act2');
        $this.toggleClass('act2');

    });
    $('.pregunta3 div').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var active = document.querySelector(".act3");
    active.classList.remove("act3");
        $this.closest('div').children('div').removeClass('act3');
        $this.toggleClass('act3');

    });
    $('.pregunta4 div').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var active = document.querySelector(".act4");
    active.classList.remove("act4");
        $this.closest('div').children('div').removeClass('act4');
        $this.toggleClass('act4');

    });
    $('.pregunta5 div').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var active = document.querySelector(".act5");
    active.classList.remove("act5");
        $this.closest('div').children('div').removeClass('act5');
        $this.toggleClass('act5');

    });
    $('.pregunta6 div').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var active = document.querySelector(".act6");
    active.classList.remove("act6");
        $this.closest('div').children('div').removeClass('act6');
        $this.toggleClass('act6');

    });
    $('.pregunta7 div').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var active = document.querySelector(".act7");
    active.classList.remove("act7");
        $this.closest('div').children('div').removeClass('act7');
        $this.toggleClass('act7');

    });


       $scope.data = function(p,r){
      if (p==0) {
        $scope.respuesta[0].respuesta = r;
      }
      if (p==1) {
        $scope.respuesta[1].respuesta = r;
      }
      if (p==2) {
        $scope.respuesta[2].respuesta = r;
      }
      if (p==3) {
        $scope.respuesta[3].respuesta = r;
      }
      if (p==4) {
        $scope.respuesta[4].respuesta = r;
      }
      if (p==5) {
        $scope.respuesta[5].respuesta = r;
      }
      if (p==6) {
        $scope.respuesta[6].respuesta = r;
      }
      if (p==7) {
        $scope.respuesta[7].respuesta = r;
      }
      if (p==8) {
        if (r==0) {
          $scope.respuesta[8].respuesta = r;  
        }else{
          $scope.respuesta[8].respuesta = r;
          //$scope.respuesta[8].comentario = document.getElementById("comentario").value;
        }
        
      }

    }

    $scope.guardar = function(tipo){
        if ($scope.respuesta[8].respuesta =="1") {
            $scope.respuesta[8].comentario = document.getElementById("comentario").value;   
        }

        console.log(tipo, $scope.respuesta);
        $http({
            url: path + 'encuesta/create',
            method: 'GET',
            params:{
                respuesta: JSON.stringify($scope.respuesta),
                idTipo: tipo
            },
            headers: {
                "Content-Type": "application/json"
            }

        }).success(function (response) {
            if (response.error == false) {
              $ionicLoading.show({
                template: 'La encuesta fue realizada con éxito',
                duration: 2000
              }).then(function(){
                 
              });
             
            }

        }).error(function (error) {
            
            alert(error);
        });
    }
  // $scope.inicio();
    
});
