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

  $scope.buscarConsumo = function(){
    $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'consumo/all',
        method: 'get',
        params:{
          idEvento: $rootScope.eventoDetalle.idEvento
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function (response) {
      $rootScope.reciclado = response.reciclado;//RECICLADO
      $rootScope.impacto = response.impacto;
      $rootScope.selectPalco = response.selectPalco;
      $rootScope.selectCalle = response.selectCalle;
      $rootScope.selectOrganico = response.selectOrganico;

      //reporte individual de cada materia
      $rootScope.aluminio = response.reporteAluminio;
      $rootScope.vidrio = response.reporteVidrio;
      $rootScope.plastico = response.reportePlastico;
      $rootScope.carton = response.reporteCarton;
      $rootScope.organico = response.reporteOrganico;

      //agregar puntos a las variables
      $rootScope.aluminio.basura = $rootScope.numberFormat(Math.round($rootScope.aluminio.basura).toString());
      $rootScope.aluminio.kwh = $rootScope.numberFormat(Math.round($rootScope.aluminio.kwh).toString()); 
      $rootScope.aluminio.agua = $rootScope.numberFormat(Math.round($rootScope.aluminio.agua).toString());
      $rootScope.aluminio.petroleo = $rootScope.numberFormat(Math.round($rootScope.aluminio.petroleo).toString());
      $rootScope.aluminio.co2 = $rootScope.numberFormat(Math.round($rootScope.aluminio.co2).toString());
      $rootScope.aluminio.bauxita = $rootScope.numberFormat(Math.round($rootScope.aluminio.bauxita).toString());
      $rootScope.aluminio.hierro = $rootScope.numberFormat(Math.round($rootScope.aluminio.hierro).toString());
      $rootScope.vidrio.basura = $rootScope.numberFormat(Math.round($rootScope.vidrio.basura).toString());
      $rootScope.vidrio.prima = $rootScope.numberFormat(Math.round($rootScope.vidrio.prima).toString());
      $rootScope.vidrio.kwh = $rootScope.numberFormat(Math.round($rootScope.vidrio.kwh).toString());
      $rootScope.vidrio.petroleo = $rootScope.numberFormat(Math.round($rootScope.vidrio.petroleo).toString());
      $rootScope.vidrio.co2 = $rootScope.numberFormat(Math.round($rootScope.vidrio.co2).toString());
      $rootScope.plastico.basura = $rootScope.numberFormat(Math.round($rootScope.plastico.basura).toString());
      $rootScope.plastico.petroleo = $rootScope.numberFormat(Math.round($rootScope.plastico.petroleo).toString());
      $rootScope.plastico.kwh = $rootScope.numberFormat(Math.round($rootScope.plastico.kwh).toString());
      $rootScope.plastico.agua = $rootScope.numberFormat(Math.round($rootScope.plastico.agua).toString());
      $rootScope.plastico.co2 = $rootScope.numberFormat(Math.round($rootScope.plastico.co2).toString());
      $rootScope.carton.basura = $rootScope.numberFormat(Math.round($rootScope.carton.basura).toString());
      $rootScope.carton.arbol = $rootScope.numberFormat(Math.round($rootScope.carton.arbol).toString());
      $rootScope.carton.agua = $rootScope.numberFormat(Math.round($rootScope.carton.agua).toString());
      $rootScope.carton.kwh = $rootScope.numberFormat(Math.round($rootScope.carton.kwh).toString());
      $rootScope.carton.petroleo = $rootScope.numberFormat(Math.round($rootScope.carton.petroleo).toString());
      $rootScope.carton.co2 = $rootScope.numberFormat(Math.round($rootScope.carton.co2).toString());
      $rootScope.organico.basura = $rootScope.numberFormat(Math.round($rootScope.organico.basura).toString());
      $rootScope.organico.compostaje = $rootScope.numberFormat(Math.round($rootScope.organico.compostaje).toString());
      $rootScope.organico.organico = $rootScope.numberFormat(Math.round($rootScope.organico.organico).toString());
      $rootScope.organico.natural = $rootScope.numberFormat(Math.round($rootScope.organico.natural).toString());
      $rootScope.organico.gas = $rootScope.numberFormat(Math.round($rootScope.organico.gas).toString());
      $rootScope.organico.bio = $rootScope.numberFormat(Math.round($rootScope.organico.bio).toString());
      $rootScope.organico.co2 = $rootScope.numberFormat(Math.round($rootScope.organico.co2).toString());

      //Puntos en la tabla de impacto 
      $rootScope.impacto.costoArboles = $rootScope.numberFormat(Math.round($rootScope.impacto.costoArboles).toString());
      $rootScope.impacto.reduccionArboles = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionArboles).toString());
      $rootScope.impacto.totalArboles =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalArboles).toString());
      
      $rootScope.impacto.costoCompo = $rootScope.numberFormat(Math.round($rootScope.impacto.costoCompo).toString());
      $rootScope.impacto.reduccionCompo = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionCompo).toString());
      $rootScope.impacto.totalCompo =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalCompo).toString());
      
      $rootScope.impacto.costoDese = $rootScope.numberFormat(Math.round($rootScope.impacto.costoDese).toString());
      $rootScope.impacto.reduccionDese = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionDese).toString());
      $rootScope.impacto.totalDese =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalDese).toString());
      
      $rootScope.impacto.costoPrima = $rootScope.numberFormat(Math.round($rootScope.impacto.costoPrima).toString());
      $rootScope.impacto.reduccionPrima = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionPrima).toString());
      $rootScope.impacto.totalPrima =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalPrima).toString());

      $rootScope.impacto.costoVerte = $rootScope.numberFormat(Math.round($rootScope.impacto.costoVerte).toString());
      $rootScope.impacto.reduccionVerte = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionVerte).toString());
      $rootScope.impacto.totalVerte =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalVerte).toString());

      $rootScope.impacto.costoKwh = $rootScope.numberFormat(Math.round($rootScope.impacto.costoKwh).toString());
      $rootScope.impacto.reduccionKwh = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionKwh).toString());
      $rootScope.impacto.totalKwh =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalKwh).toString());
      
      $rootScope.impacto.costoAgua = $rootScope.numberFormat(Math.round($rootScope.impacto.costoAgua).toString());
      $rootScope.impacto.reduccionAgua = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionAgua).toString());
      $rootScope.impacto.totalAgua =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalAgua).toString());
      
      $rootScope.impacto.costoPetro = $rootScope.numberFormat(Math.round($rootScope.impacto.costoPetro).toString());
      $rootScope.impacto.reduccionPetro = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionPetro).toString());
      $rootScope.impacto.totalPetro =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalPetro).toString());
      
      $rootScope.impacto.costoNatural = $rootScope.numberFormat(Math.round($rootScope.impacto.costoNatural).toString());
      $rootScope.impacto.reduccionNatural = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionNatural).toString());
      $rootScope.impacto.totalNatural =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalNatural).toString());

      $rootScope.impacto.costoGas = $rootScope.numberFormat(Math.round($rootScope.impacto.costoGas).toString());
      $rootScope.impacto.reduccionGas = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionGas).toString());
      $rootScope.impacto.totalGas =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalGas).toString());

      $rootScope.impacto.costoBio = $rootScope.numberFormat(Math.round($rootScope.impacto.costoBio).toString());
      $rootScope.impacto.reduccionBio = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionBio).toString());
      $rootScope.impacto.totalBio =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalBio).toString());

      $rootScope.impacto.costoCo2 = $rootScope.numberFormat(Math.round($rootScope.impacto.costoCo2).toString());
      $rootScope.impacto.reduccionCo2 = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionCo2).toString());
      $rootScope.impacto.totalCo2 =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalCo2).toString());

      $rootScope.impacto.costoBauxita = $rootScope.numberFormat(Math.round($rootScope.impacto.costoBauxita).toString());
      $rootScope.impacto.reduccionBauxita = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionBauxita).toString());
      $rootScope.impacto.totalBauxita =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalBauxita).toString());

      $rootScope.impacto.costoHierro = $rootScope.numberFormat(Math.round($rootScope.impacto.costoHierro).toString());
      $rootScope.impacto.reduccionHierro = $rootScope.numberFormat(Math.round($rootScope.impacto.reduccionHierro).toString());
      $rootScope.impacto.totalHierro =  $rootScope.numberFormat(Math.round($rootScope.impacto.totalHierro).toString());
      console.log($rootScope.aluminio,$rootScope.vidrio,$rootScope.plastico,$rootScope.carton,$rootScope.organico); 
      //
      $rootScope.totalReciclado =0;
      angular.forEach($rootScope.reciclado, function (value, key){
        value.kg2 = $rootScope.numberFormat(Math.round(value.kg).toString());
        value.valor2 = $rootScope.numberFormat(Math.round(value.valor).toString());
        value.total2 = $rootScope.numberFormat(Math.round(value.total).toString());
        $rootScope.totalReciclado += value.kg;
      });
      $rootScope.reciclado[0].porcentaje = ($rootScope.reciclado[0].kg*100)/$rootScope.totalReciclado;
      $rootScope.reciclado[1].porcentaje = ($rootScope.reciclado[1].kg*100)/$rootScope.totalReciclado;
      $rootScope.reciclado[2].porcentaje = ($rootScope.reciclado[2].kg*100)/$rootScope.totalReciclado;
      $rootScope.reciclado[3].porcentaje = ($rootScope.reciclado[3].kg*100)/$rootScope.totalReciclado;
      $rootScope.reciclado[4].porcentaje = ($rootScope.reciclado[4].kg*100)/$rootScope.totalReciclado;
      console.log($rootScope.reciclado);
      //reutilizacion de material
      //plastico
      $rootScope.reciclado[2].marco = $rootScope.reciclado[2].kg / 6;
      $rootScope.reciclado[2].marco = $rootScope.numberFormat(Math.round($rootScope.reciclado[2].marco).toString());
      $rootScope.reciclado[2].cantidad = $rootScope.reciclado[2].kg / 30;
      $rootScope.reciclado[2].cantidad = $rootScope.numberFormat(Math.round($rootScope.reciclado[2].cantidad).toString());
      $rootScope.reciclado[2].camisa = $rootScope.reciclado[2].cantidad / 40;
      $rootScope.reciclado[2].camisa = $rootScope.numberFormat(Math.round($rootScope.reciclado[2].camisa).toString());
      //aluminio
      $rootScope.reciclado[0].llanta = $rootScope.reciclado[0].cantidad / 80;
      $rootScope.reciclado[0].llanta = $rootScope.numberFormat(Math.round($rootScope.reciclado[0].llanta).toString());
      $rootScope.reciclado[0].cantidad = $rootScope.numberFormat(Math.round($rootScope.reciclado[0].cantidad).toString());
      
      $state.go('app.Consumo');
      $ionicLoading.hide();
    });
  }

  $rootScope.numberFormat = function (numero){
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

  
});
