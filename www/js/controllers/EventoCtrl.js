app.controller('EventoCtrl', function($state, $scope,$ionicLoading, $rootScope, $http, $ionicLoading, $ionicScrollDelegate , ionicMaterialMotion){
    
    $scope.x = 1;
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
          url: path + 'evento/inicio',
          method: 'get',
          headers: {
              "Content-Type": "application/json"
          }
      }).success(function (response) {
        $scope.eventos = response.evento;
        console.log($scope.eventos);
        $scope.datos = [];

        angular.forEach($scope.eventos, function (value, key) {
          $scope.aux = {
            start: new Date(value.fechaInicio), 
            end: new Date(value.fechaFin), 
            text: value.descripcion
          }
          $scope.datos.push($scope.aux);
            
        }); 
        

        var now = new Date();
        console.log(now, $scope.datos);
        $ionicLoading.hide();
        });
    }

    

    $scope.detalleEvento = function(e){
      $rootScope.eventoDetalle = e;
      //console.log($rootScope.eventoDetalle);
      $state.go('app.DetalleEvento');
    }

    $scope.act = function(p){
        $scope.x = p;
    }

    $scope.initMap = function() {
      //  alert('initMap');
        var myLatLng = {lat: -25.363, lng: 131.044};

        var map = new google.maps.Map(document.getElementById('map1'), {
          zoom: 4,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
    }


    // In the following example, markers appear when the user clicks on the map.
      // Each marker is labeled with a single alphabetical character.
    

      $scope.initialize= function() {
        var myLatLng = {lat: 10.464959799999999, lng: -73.2352409};
        var map = new google.maps.Map(document.getElementById('map1'), {
          zoom: 12,
          center: myLatLng
        });

        

        

        angular.forEach($scope.eventos, function (value, key) {
          console.log(value);
          var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 style="margin-bottom:0" id="firstHeading" class="firstHeading">'+value.descripcion+'</h4>'+
          '<div id="bodyContent">'+
          '<p style="margin-bottom:10px">'+value.Direccion+'</p>' +
          '<p style="margin-bottom:5px"><b>Telefono:</b> '+value.telefono+'</p> '+
          '<p style="margin-bottom:5px"><b>inicia: </b>'+value.inicio+'</p> '+
          '<p style="margin-bottom:5px"><b>finaliza:</b> '+value.fin+'</p> '+
          '</div>'+
          '</div>';

          $scope.infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          var LatLng = {lat: parseFloat(value.lat), lng: parseFloat(value.lng)};
          $scope.addMarker(LatLng, map, $scope.infowindow, value); 
        }); 

      }

      // Adds a marker to the map.
      $scope.addMarker = function(location, map, mensaje, evento) {
        // Add the marker at the clicked location, and add the next-available label
        // from the array of alphabetical characters.
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        marker.addListener('click', function() {
          mensaje.open(map, marker);
        });
        
        marker.addListener('dblclick', function() {
          $scope.detalleEvento(evento);
        });

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
