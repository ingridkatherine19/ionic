app.controller('ComollegarCtrl', function ($state , $scope, $ionicModal, $ionicHistory, $ionicPopover, $timeout , $rootScope, $http, $window, $ionicLoading , $cordovaGeolocation) {
   // $scope.lat = 10.4651923;
  //  $scope.lng = -73.239052;

    if (JSON.parse(localStorage.getItem('user'))) {
        $rootScope.user = JSON.parse(localStorage.getItem('user')); 
    }


   
     $scope.initMap2 = function () {//PRUEBA CON NAVIGATOR
        //busca la posicion del usuario
          var posOptions = {timeout: 10000, enableHighAccuracy: false};
          
           $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            $scope.lat  = position.coords.latitude
            $scope.lng = position.coords.longitude
            //alert( $scope.lat + '  ' + $scope.lng);
            //$scope.initMap($scope.lat, $scope.lng);
            var directionsDisplay = new google.maps.DirectionsRenderer;
            var directionsService = new google.maps.DirectionsService;
        
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 14,
              center: {lat: parseFloat($scope.lat), lng: parseFloat($scope.lng)}
            });
            directionsDisplay.setMap(map);
            calculateAndDisplayRoute(directionsService, directionsDisplay, $scope.lat, $scope.lng);
            document.getElementById('mode').addEventListener('change', function() {
            calculateAndDisplayRoute(directionsService, directionsDisplay);
          });
            //alert(lat + '   ' + long);
          }, function(err) {
            alert(err);
          });
      }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
    }
    
    

      function calculateAndDisplayRoute(directionsService, directionsDisplay, lat, lng) {
        var selectedMode = document.getElementById('mode').value;
        //console.log(lat,lng);
        directionsService.route({
          origin: {lat: lat, lng: lng},
          destination: {lat: parseFloat($rootScope.direccionSelect.lat), lng: parseFloat($rootScope.direccionSelect.lng)},  // Destino al que se va.
          // Note that Javascript allows us to access the constant
          // using square brackets and a string value as its
          // "property."
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          if (status == 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
  //$scope.initMap2();
});