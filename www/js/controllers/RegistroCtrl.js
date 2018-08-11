app.controller('RegistroCtrl', function($state, $scope,$ionicLoading, $ionicActionSheet, $rootScope, $http, $ionicLoading, $ionicScrollDelegate, $ionicPopup){
    

    $scope.user_form={};
    $rootScope.tipo = 1; // ASUMIENDO EL TIPO DE USUARIO QUE ESTA EN LA APLICACION
    $scope.opcion = 1;
    $scope.opcion1 = {};
    $scope.left = 'disabled';
    $scope.right = '';
    $scope.cont = 1;
    $scope.empresa = {};
    $scope.usuario = {};
    $scope.agrupacion = {};
    $scope.participante = {};
    $scope.markers = [];
    $scope.sector = 0;
    $scope.departamento = 0;
    $scope.sexo = 0;
    $scope.tipoparticipante = 0;
    /*
        Esta funcion llama al sservicio para hacer el registro
    */

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
                if (index == 0) {// es tipo empresa
                  $rootScope.tipo = 1; 

                }else{
                  if (index == 1) {// es tipo agrupacion
                    $rootScope.tipo = 2; 
                  }else{
                    if (index == 2) {//es tipo participante
                      $rootScope.tipo = 3; 
                    }else{
                      $rootScope.tipo = 4; //Publico
                    }
                    
                  }
                }
                $scope.opcion = 1;
                $scope.empresa = {};
                $scope.usuario = {};
                $scope.agrupacion = {};
                $scope.participante = {};
                $scope.right = "";
               return true;
            }
        });

        // For example's sake, hide the sheet after two seconds
        /*$timeout(function() {
            hideSheet();
        }, 2000);*/

    };

        $scope.actionSheet2 = function() {

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
                if (index == 0) {// es tipo empresa
                  $rootScope.tipo = 1; 

                }else{
                  if (index == 1) {// es tipo agrupacion
                    $rootScope.tipo = 2;
                    $scope.agrupacionAll(); 
                  }else{
                    if (index == 2) {//es tipo participante
                      $rootScope.tipo = 3; 
                      $scope.participanteAll();
                    }else{
                      $rootScope.tipo = 4; //Publico
                    }
                    
                  }
                }

                $scope.opcion = 1;
                $scope.empresa = {};
                $scope.usuario = {};
                $scope.agrupacion = {};
                $scope.participante = {};
                $scope.right = "";
               return true;
            }
        });

        // For example's sake, hide the sheet after two seconds
        /*$timeout(function() {
            hideSheet();
        }, 2000);*/

    };
   

    $scope.cambioPagina = function (dato) {
      
      if (dato == 0) {
         $state.go("app.registro");
      }else{
        $state.go("app.seleccion");
      }
      
    }

    $scope.verRegistro = function(identificacion , tipo){
      $rootScope.identificacionSelect = identificacion;
      $rootScope.tipoS = tipo;
      console.log($rootScope.identificacionSelect , $rootScope.tipoS);
      $state.go("app.registroexistente");
    }

    $scope.cambioOpcionArrow = function(opc){//Cambiar opcion de las flechitas
      if (opc == 1) {
        if ($scope.opcion == 1) {
          $scope.cont = $scope.cont + 1;
          $scope.left = "";
          $scope.right = "";
          $scope.opcion = 2;
        }else{
          if ($scope.opcion == 2) {
            $scope.opcion =  3;
            $scope.left = '';
            $scope.right = 'disabled';
          }
            
        }
      }else{
        if ($scope.opcion == 1) {
          $scope.left = "disabled";
          $scope.right = "";
        }else{
          if ($scope.opcion == 2 ) {
            $scope.opcion =  1;
            $scope.left = '';
            $scope.right = '';
          }else{
              if ($scope.opcion == 3) {
                $scope.opcion =  2;
                $scope.left = '';
                $scope.right = 'disabled';

              }
          }
            
        }
          
      }
    }
    $scope.cambioOpcion = function(opc){
      if (opc == 1) {
        $scope.opcion =  1;
        $scope.left = 'disabled';
      }else{
        if (opc == 2) {
          $scope.opcion =  2;
          $scope.left = '';
          $scope.right = '';
        }else{
          if (opc == 3) {
            $scope.opcion =  3;
            $scope.left = '';
            $scope.right = 'disabled';
          }
        }
      }
    }
    $scope.departamentoall = function (){
      $http({
            url: path + 'departamento/all',
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }

        }).success(function (response) {
         
          $scope.departamentos = response.departamentos;
        }).error(function (error) {
          $ionicLoading.hide();
       //   alert(error);
        });
    }
    $scope.empresaAll = function (){
      $http({
            url: path + 'empresa/all',
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }

        }).success(function (response) {
         $scope.empresas = response.empresa;
         console.log($scope.empresas);
        }).error(function (error) {
        });
    }
    $scope.agrupacionAll = function (){
      $http({
            url: path + 'agrupacion/all',
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }

        }).success(function (response) {
         $scope.agrupaciones = response.agrupacion;
         console.log($scope.agrupaciones);
        }).error(function (error) {
        });
    }
    $scope.participanteAll = function (){
      $http({
            url: path + 'participante/all',
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }

        }).success(function (response) {
         $scope.participantes = response.participante;
         console.log($scope.participantes);
        }).error(function (error) {
        });
    }
    $scope.buscarCiudad = function(idDepartamento){
    $http({
        url: path + 'ciudad/all',
        method: 'get',
        params:{
          idDepartamento: 11 //PRUEBA
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $scope.ciudades = response.ciudades;
    });
  }
  $scope.allGenero = function(){//todos los generos
    $http({
        url: path + 'genero/all',
        method: 'get',
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $scope.genero = response.genero;
    });
  }

  $scope.guardarEmpresa = function(){
   $scope.empresa.lat = $scope.lat;
   $scope.empresa.lng = $scope.lng;
   console.log($scope.empresa);
    $http({
        url: path + 'registroapp/empresa',
        method: 'get',
        params: $scope.empresa,
        headers: {
            "Content-Type": "application/json"
        }

    }).success(function (response) {
      alert(response.mensaje);
      $scope.guardarUsuario();
      $state.go('app.resumen');
    });
  }

  $scope.guardarAgrupacion = function(){
    $scope.agrupacion.lat = $scope.lat;
    $scope.agrupacion.lng = $scope.lng;
   console.log($scope.agrupacion);
    $http({
        url: path + 'registroapp/agrupacion',
        method: 'get',
        params: $scope.agrupacion,
        headers: {
            "Content-Type": "application/json"
        }

    }).success(function (response) {
      alert(response.mensaje);
      $scope.guardarUsuario();
      $state.go('app.resumen');
    });
  }

  $scope.guardarParticipante = function(){
    $scope.agrupacion.lat = $scope.lat;
    $scope.agrupacion.lng = $scope.lng;
    console.log($scope.agrupacion);
    $http({
        url: path + 'registroapp/participante',
        method: 'get',
        params: $scope.participante,
        headers: {
            "Content-Type": "application/json"
        }

    }).success(function (response) {
      alert(response.mensaje);
      $scope.guardarUsuario();
      $state.go('app.resumen');
    });
  }

  $scope.guardarUsuario = function(){
      $http({
          url: path + 'usuario/create',
          method: 'get',
          params: $scope.usuario,
          headers: {
              "Content-Type": "application/json"
          }

      }).success(function (response) {
        if (response.error == false) {
          alert('Se a registrado con éxito, por favor espere confirmación del administrador');
        }

        if ($rootScope.tipo == 4) {
          $state.go('app.resumen'); 
        }
      });
  }
  $scope.guardarExistente = function(){
    
    if ($scope.usuario.contrasena == $scope.usuario.contrasena2) {
      $scope.usuario.cedula = $scope.identificacionSelect;
      $scope.usuario.tipo = $scope.tipoS;
      
      $http({
          url: path + 'registroapp/existente',
          method: 'get',
          params: $scope.usuario,
          headers: {
              "Content-Type": "application/json"
          }

      }).success(function (response) {
        if (response.error == false) {
          alert('Se a registrado con éxito, por favor espere confirmación del administrador');
        }
         $state.go('app.resumen'); 
      });
    }else{
      alert('Las contraseñas son distintas, por favor verifique');
    }
  }

    
  $scope.guardar = function () {
    if ($scope.usuario.contrasena == $scope.usuario.contrasena2) {
      if ($rootScope.tipo == 1) {
        if ($scope.empresa.nombre && $scope.empresa.nit && $scope.empresa.email && $scope.empresa.sector && $scope.empresa.gerente && $scope.empresa.telefono1 && $scope.empresa.departamento && $scope.empresa.ciudad && $scope.empresa.direccion && $scope.usuario.nombre && $scope.usuario.apellido && $scope.usuario.correo) {
          $scope.guardarEmpresa();
          $scope.usuario.tipo = 1;
          $scope.usuario.cedula = $scope.empresa.nit; 
        }else{
          alert('Todos los datos son requeridos, por favor verifique');
        }

      }
      if ($rootScope.tipo == 2) {
        if ($scope.agrupacion.nombre && $scope.agrupacion.nit && $scope.agrupacion.representante && $scope.agrupacion.email && $scope.agrupacion.telefono && $scope.agrupacion.genero && $scope.agrupacion.departamento && $scope.agrupacion.ciudad && $scope.agrupacion.direccion && $scope.usuario.nombre && $scope.usuario.apellido && $scope.usuario.correo ) {
          $scope.guardarAgrupacion();
          $scope.usuario.tipo = 2;
          $scope.usuario.cedula = $scope.agrupacion.nit;
        }else{
          alert('Todos los datos son requeridos, por favor verifique');
        }

      }
      if ($rootScope.tipo == 3) {
        if ($scope.participante.nombre && $scope.participante.cedula && $scope.participante.edad && $scope.participante.telefono && $scope.participante.sexo && $scope.participante.tipo && $scope.participante.departamento && $scope.participante.ciudad && $scope.participante.direccion && $scope.usuario.nombre && $scope.usuario.apellido && $scope.usuario.correo) {
          $scope.guardarParticipante();
          $scope.participante.correo = $scope.usuario.correo;
          $scope.participante.cedula = $scope.usuario.cedula;
          $scope.usuario.tipo = 3;
        }else{
          alert('Todos los datos son requeridos, por favor verifique');
        }

      }
      if ($rootScope.tipo == 4) {
        if ($scope.usuario.nombre && $scope.usuario.apellido && $scope.usuario.correo && $scope.usuario.cedula) {
          $scope.guardarUsuario();
          $scope.usuario.tipo = 4;
        }else{
          alert('Todos los datos son requeridos, por favor verifique');
        }

      }
    }else{
      alert('Las contraseñas son distintas, por favor verifique');
    }

  }
//MAPAAAAA
  $scope.map;
  $scope.markers = [];
  $scope.initMap = function() {
      var haightAshbury = {lat: 10.4742449, lng: -73.2436335};

      //var haightAshbury = {lat: 37.769, lng: -122.446};

       $scope.map = new google.maps.Map(document.getElementById('map3'), {
          zoom: 14,
          center: haightAshbury,
          mapTypeId: 'terrain'
        });

        // This event listener will call addMarker() when the map is clicked.
        $scope.map.addListener('click', function(event) {
          //alert();
          if ($scope.markers.length == 0) {
            $scope.addMarker(event.latLng);  
          }
          
        });

        // Adds a marker at the center of the map.
        //$scope.addMarker(haightAshbury);
    
  }

     // Adds a marker to the map and push to the array.
      $scope.addMarker = function(location) {
        $scope.lat = location.lat();
        $scope.lng = location.lng();
        console.log(location.lat(), location.lng());
        var marker = new google.maps.Marker({
          position: location,
          map: $scope.map
        });
        console.log(marker.getPosition());
        $scope.markers.push(marker);
        //console.log($scope.markers);
      }

      // Sets the map on all markers in the array.
      $scope.setMapOnAll = function(map) {
        for (var i = 0; i < $scope.markers.length; i++) {
          $scope.markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      $scope.clearMarkers = function() {
        $scope.setMapOnAll(null);
      }

      // Shows any markers currently in the array.
      $scope.showMarkers = function() {
        $scope.setMapOnAll($scope.map);
      }

      // Deletes all markers in the array by removing references to them.
      $scope.deleteMarkers = function() {
        $scope.clearMarkers();
        $scope.markers = [];
      }

   //Llamadas
    $scope.allGenero();
    $scope.departamentoall();
    $scope.empresaAll();

});
