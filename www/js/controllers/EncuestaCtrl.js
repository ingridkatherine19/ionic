app.controller('EncuestaCtrl', function($state, $scope,$ionicLoading, $rootScope, $http, $ionicLoading, $ionicScrollDelegate , ionicMaterialMotion , ionicMaterialInk , $ionicPopup){
   console.log($rootScope.eventoDetalle);

     $scope.$on("$ionicView.beforeEnter", function(event, data){
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });

        if (!$rootScope.eventoDetalle) {
          $ionicLoading.hide();
          $state.go('app.Culminados');
        }else{
          //consultas
          $scope.buscarEncuesta();
        }
    });
    $scope.buscarEncuesta = function(){
        $http({
            url: path + 'buscar/encuesta',
            method: 'get',
            params:{
              idEvento: $rootScope.eventoDetalle.idEvento
            },
            headers: {
                "Content-Type": "application/json"
            }
        }).success(function (response) {
          $scope.preguntas = response.preguntas;
          console.log($scope.preguntas);
          $ionicLoading.hide();
        });
    }
  
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

});
