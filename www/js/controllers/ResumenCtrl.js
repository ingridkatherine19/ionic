app.controller('ResumenCtrl', function ($scope, $rootScope , $window, $stateParams, $ionicActionSheet, $timeout, ionicMaterialInk, $http, $ionicLoading, $ionicPopup) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
    

    //alert('resumen');

    $scope.$on("$ionicView.beforeEnter", function(event, data){
        
      $ionicLoading.show({
          template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
      });

        $scope.actTipo();
        $scope.reportePublico();
        $scope.resporteEmpresa();
        $scope.actAll();
        $scope.medioambientalAll();
            
    });

    $scope.actTipo = function(){
        $http({
            url: path + 'evento/total',
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            }
        }).success(function (response) {
          $scope.totalTipo = response.total;
          //$scope.labels = ["Sin valor comercial", "Con boleta de ingreso", "Con valor comercial"];
          //$scope.data = [$scope.totalTipo.sinvalor, $scope.totalTipo.conboleta, $scope.totalTipo.convalor];
          $scope.labels = [''];
          $scope.series = ['Sin valor comercial', 'Con boleta de ingreso', 'Con valor comercial'];

          $scope.data = [
            [$scope.totalTipo.sinvalor],
            [$scope.totalTipo.conboleta],
            [$scope.totalTipo.convalor]
          ];
          //console.log($scope.totalTipo);
        }); 
    }

    
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
        //$scope.labels2 = ["Patrocinadoras", "Proveedoras", "Consumidoras"];
        //$scope.data2 = [$scope.cantidadTipoEmpresa.patrocinadoras, $scope.cantidadTipoEmpresa.proveedoras, $scope.cantidadTipoEmpresa.consumidoras];
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

    $scope.reportePublico = function(){
      

      $http({
          url: path + 'evento/iniciopublico',
          method: 'get',
          headers: {
              "Content-Type": "application/json"
          }
      }).success(function (response) {
        
        $scope.cantEventos = response.eventos;
        $scope.total = response.total;
        console.log($scope.total);
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
        
        $ionicLoading.hide();
      });
    }

    $scope.actAll = function(){
        $http({
            url: path + 'dashboard/act',
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            }
        }).success(function (response) {
          $scope.actividades = response.actividad;
          $scope.totales = response.totales;
          $scope.totales.palco = $scope.numberFormat($scope.totales.palco.toString());
          $scope.totales.calle = $scope.numberFormat($scope.totales.calle.toString());
          $scope.totalModalidad = response.modalidad;
          $scope.horas = response.horas;
  
          $scope.minutos = $scope.horas*60;
          //total de ingresos y egresos
          $scope.totalIngCos = response.ingCos;
          $scope.totalIngCos.costosxhora = $scope.totalIngCos.totalCostos/$scope.horas;
          $scope.totalIngCos.ingresosxhora = $scope.totalIngCos.totalIngresos/$scope.horas;
          $scope.totalIngCos.costosxminuto = $scope.totalIngCos.totalCostos/$scope.minutos;
          $scope.totalIngCos.ingresosxminuto = $scope.totalIngCos.totalIngresos/$scope.minutos;
          $scope.totalIngCos.costosxhora = $scope.numberFormat(Math.round($scope.totalIngCos.costosxhora).toString());
          $scope.totalIngCos.ingresosxhora = $scope.numberFormat(Math.round($scope.totalIngCos.ingresosxhora).toString());;
          $scope.totalIngCos.costosxminuto = $scope.numberFormat(Math.round($scope.totalIngCos.costosxminuto).toString());;
          $scope.totalIngCos.ingresosxminuto = $scope.numberFormat(Math.round($scope.totalIngCos.ingresosxminuto).toString());;
          $scope.totalIngCos.costosxact = $scope.numberFormat($scope.totalIngCos.costosxact.toString());
          $scope.totalIngCos.ingresosxact = $scope.numberFormat($scope.totalIngCos.ingresosxact.toString());
          $scope.totalIngCos.otrosCostos = $scope.numberFormat($scope.totalIngCos.otrosCostos.toString());
          $scope.totalIngCos.otrosIngresos = $scope.numberFormat($scope.totalIngCos.otrosIngresos.toString());
          $scope.totalIngCos.totalCostos = $scope.numberFormat($scope.totalIngCos.totalCostos.toString());
          $scope.totalIngCos.totalIngresos = $scope.numberFormat($scope.totalIngCos.totalIngresos.toString());
          
          //consumo de bebidas, snacks y comidas en palcos y calle
          $scope.totalConsumo = response.consumo;
          $scope.totalConsumo.bebidasPalco = $scope.numberFormat($scope.totalConsumo.bebidasPalco.toString());
          $scope.totalConsumo.bebidascalle = $scope.numberFormat($scope.totalConsumo.bebidascalle.toString());
          $scope.totalConsumo.comidasPalco = $scope.numberFormat($scope.totalConsumo.comidasPalco.toString());
          $scope.totalConsumo.comidascalle = $scope.numberFormat($scope.totalConsumo.comidascalle.toString());
          $scope.totalConsumo.snacksPalco = $scope.numberFormat($scope.totalConsumo.snacksPalco.toString());
          $scope.totalConsumo.snackscalle = $scope.numberFormat($scope.totalConsumo.snackscalle.toString());
          $scope.totalConsumo.totalBebidas = $scope.numberFormat($scope.totalConsumo.totalBebidas.toString());
          $scope.totalConsumo.totalCalle = $scope.numberFormat($scope.totalConsumo.totalCalle.toString());
          $scope.totalConsumo.totalPalco = $scope.numberFormat($scope.totalConsumo.totalPalco.toString());      
          $scope.totalConsumo.totalSnacks = $scope.numberFormat($scope.totalConsumo.totalSnacks.toString()); 
          $scope.totalConsumo.totalComidas = $scope.numberFormat($scope.totalConsumo.totalComidas.toString()); 
          
         // console.log($scope.totalConsumo);
  
          $scope.totalEmpresa = response.totalEmpresa;
          
          $scope.cantidadEmpleos = response.cantidadEmpleos;
          $scope.cantActividades = response.cantActividades;
          $scope.totalAgrupacion = response.totalAgrupacion;
          $scope.totalParticipante = response.totalParticipante;
          $scope.sum = response.sum; 
          $scope.cantSub = response.cantSub;
          $scope.capacidad = response.capacidad;
          $scope.capacidad = $scope.numberFormat($scope.capacidad.toString());
          $scope.cantidadEmpleos = $scope.numberFormat($scope.cantidadEmpleos.toString());
        //  $scope.sum.costos = $scope.numberFormat($scope.sum.costos.toString());
       //   $scope.sum.ingresos = $scope.numberFormat($scope.sum.ingresos.toString());
          //$scope.sum.nempleados = $scope.numberFormat($scope.sum.nempleados.toString());
          //$scope.sum.cantMujeres = $scope.numberFormat($scope.sum.cantMujeres.toString());
          //$scope.sum.cantHombres = $scope.numberFormat($scope.sum.cantHombres.toString());
          $scope.porcHombres =  ($scope.sum.cantHombres * 100)/$scope.sum.nempleados;
          $scope.porcMujeres =  ($scope.sum.cantMujeres * 100)/$scope.sum.nempleados;
          /*datos de las barras*/
          $scope.totalEmpresa.totalGeneral = $scope.totalEmpresa.cantPatrocinio + $scope.totalEmpresa.cantProvee + $scope.totalEmpresa.cantConsumo;  
          $scope.totalEmpresa.promPatrocinio = ($scope.totalEmpresa.cantPatrocinio * 100) / $scope.totalEmpresa.totalGeneral;
          $scope.totalEmpresa.promPatrocinio = Math.round($scope.totalEmpresa.promPatrocinio);
          $scope.totalEmpresa.promProvee = ($scope.totalEmpresa.cantProvee * 100) / $scope.totalEmpresa.totalGeneral;
          $scope.totalEmpresa.promProvee = Math.round($scope.totalEmpresa.promProvee);
          $scope.totalEmpresa.promConsumo = ($scope.totalEmpresa.cantConsumo * 100) / $scope.totalEmpresa.totalGeneral;    
          $scope.totalEmpresa.promConsumo = Math.round($scope.totalEmpresa.promConsumo);
          //$scope.cantEmpresas = [ $scope.totalEmpresa.cantPatrocinio, $scope.totalEmpresa.cantProvee , $scope.totalEmpresa.cantConsumo
          //];

            //llenado de graficas
            $scope.labels2 = ["Patrocinadoras", "Proveedoras", "Consumidoras"];
            $scope.data2 = [$scope.totalEmpresa.cantPatrocinio, $scope.totalEmpresa.cantProvee, $scope.totalEmpresa.cantConsumo];
        
          
        });
    }

    $scope.medioambientalAll = function(){
     
        $http({
            url: path + 'consumo/dashboard',
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            }
        }).success(function (response) {
          $scope.reciclado = response.reciclado;
          $scope.impacto = response.impacto;
     //     console.log($scope.impacto);
          angular.forEach($scope.reciclado, function (value, key){
            value.kg2 = $scope.numberFormat(Math.round(value.kg).toString()); 
            value.total2 = $scope.numberFormat(Math.round(value.total).toString());
             
          });
  
          //reutilizacion de material
          //plastico
          $scope.reciclado[2].marco = $scope.reciclado[2].kg / 6;
          $scope.reciclado[2].cantidad = $scope.reciclado[2].kg / 30;
          $scope.reciclado[2].camisa = $scope.reciclado[2].cantidad / 40;
          $scope.reciclado[2].marco = $scope.numberFormat(Math.round($scope.reciclado[2].marco).toString());
          $scope.reciclado[2].cantidad = $scope.numberFormat(Math.round($scope.reciclado[2].cantidad).toString());
          $scope.reciclado[2].camisa = $scope.numberFormat(Math.round($scope.reciclado[2].camisa).toString());
          //aluminio
          $scope.reciclado[0].llanta = $scope.reciclado[0].cantidad / 80;
          $scope.reciclado[0].silla = $scope.reciclado[0].cantidad / 550;
          $scope.reciclado[0].llanta = $scope.numberFormat(Math.round($scope.reciclado[0].llanta).toString());
          $scope.reciclado[0].cantidad = $scope.numberFormat(Math.round($scope.reciclado[0].cantidad).toString());
          $scope.reciclado[0].silla = $scope.numberFormat(Math.round($scope.reciclado[0].silla).toString());
          $scope.ver = true;
          
          console.log($scope.reciclado);
          //impacto
          $scope.impacto.reduccionArboles = $scope.numberFormat(Math.round($scope.impacto.reduccionArboles).toString());
          $scope.impacto.reduccionAgua = $scope.numberFormat(Math.round($scope.impacto.reduccionAgua).toString());
          $scope.impacto.reduccionPetro = $scope.numberFormat(Math.round($scope.impacto.reduccionPetro).toString());
          $scope.impacto.reduccionKwh = $scope.numberFormat(Math.round($scope.impacto.reduccionKwh).toString());
          $scope.impacto.reduccionCo2 = $scope.numberFormat(Math.round($scope.impacto.reduccionCo2).toString());
          $scope.impacto.reduccionNatural = $scope.numberFormat(Math.round($scope.impacto.reduccionNatural).toString());
          $scope.impacto.reduccionGas = $scope.numberFormat(Math.round($scope.impacto.reduccionGas).toString());
          $scope.impacto.reduccionBio = $scope.numberFormat(Math.round($scope.impacto.reduccionBio).toString());
          
        });
    }

    $scope.numberFormat = function (numero){
        // Variable que contendra el resultado final
        var resultado = "";
        var nuevoNumero = "";
    
        // Si el numero empieza por el valor "-" (numero negativo)
        if(numero[0]=="-")
        {
            // Cogemos el numero eliminando los posibles puntos que tenga, y sin
            // el signo negativo
            nuevoNumero = numero.replace(/\./g,'').substring(1);
        }else{
            // Cogemos el numero eliminando los posibles puntos que tenga
            nuevoNumero= numero.replace(/\./g,'');
        }
    
        // Si tiene decimales, se los quitamos al numero
        if(numero.indexOf(",")>=0)
            nuevoNumero=nuevoNumero.substring(0,nuevoNumero.indexOf(","));
    
        // Ponemos un punto cada 3 caracteres
        for (var j, i = nuevoNumero.length - 1, j = 0; i >= 0; i--, j++)
            resultado = nuevoNumero.charAt(i) + ((j > 0) && (j % 3 == 0)? ".": "") + resultado;
    
        // Si tiene decimales, se lo añadimos al numero una vez forateado con 
        // los separadores de miles
        if(numero.indexOf(",")>=0)
            resultado +=numero.substring(numero.indexOf(","));
    
        if(numero[0]=="-")
        {
            // Devolvemos el valor añadiendo al inicio el signo negativo
          return "-"+resultado;
        }else{
      
            return resultado;
        }
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
            title: 'Contamos con '+ $scope.cantEmpresas+' Empresas',
            template: 'Estan distribuidas en todas las ciudades donde realizamos nuestros eventos. Que pueden patrocinar y ofrecer sus servicios en los distintos eventos'
        });
    }; 

    




    
    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});