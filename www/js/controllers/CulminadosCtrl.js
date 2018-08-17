app.controller('CulminadosCtrl', function($state, $scope,$ionicLoading, $rootScope, $http, $ionicLoading, $ionicScrollDelegate , ionicMaterialMotion){
  
    
    $scope.path = 'http://192.168.100.238/ideconNuevo/public/';
    
    $scope.$on("$ionicView.beforeEnter", function(event, data){
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });
        $scope.buscarEvento();
        $scope.blinds();

    });
    $scope.$on('$ionicView.enter', function(e) {
    
    });

    $scope.buscarEvento = function(){
      $http({
          url: path + 'evento/fin',
          method: 'get',
          headers: {
              "Content-Type": "application/json"
          }
      }).success(function (response) {
        $scope.eventos = response.evento;
        $ionicLoading.hide();
      });
    }

    $scope.detalleEvento = function(e){
      $rootScope.eventoDetalle = e;
      $state.go('app.DetalleEventoF');
    }
  
    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var i = 0; i < done.length; i++) {
            done[i].classList.remove('done');
            done[i].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var i = 0; i < ionList.length; i++) {
            var toRemove = ionList[i].className;
            if (/animate-/.test(toRemove)) {
                ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

     
    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
        }, 500);
    };

  
    
});
