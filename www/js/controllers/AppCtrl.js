app.controller('AppCtrl', function ($state , $scope, $ionicModal, $ionicHistory, $ionicPopover, $timeout , $rootScope, $http, $window, $ionicLoading) {
    // Form data for the login modal
    $rootScope.user = false;
    $scope.loginData = {};
    $rootScope.valor = 1;
    if (JSON.parse(localStorage.getItem('user'))) {
        $rootScope.user = JSON.parse(localStorage.getItem('user')); 
    }
     
    console.log($rootScope.user);
    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }
    $timeout(function() {
        //alert(path +'AppCtrl token: '+idtoken);
        if(idtoken && $rootScope.user){
            $http({
                url: path + 'prueba/token',
                method: 'get',
                params: {
                    idUsuario: $rootScope.user.idUsuario,
                    token: idtoken
                },
                headers: {
                    "Content-Type": "application/json",
                }

            }).success(function (response) {
                //console.log(response);
               // alert('inserto');
            
            }).error(function (response) {
                alert(error)    
            });
        }
        

    },10000);

    /*var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        window.open('https://twitter.com/satish_vr2011', '_blank');
    });*/

    // .fromTemplate() method
    /*var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">My Pgjkjkghkjge</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       My Popover Contents' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });*/
   /* $scope.closePopover = function () {
        $scope.popover.hide();
    };*/
    $scope.logout = function () {

    $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    $http({
        url: path + 'usuarioapp/logout',
        method: 'get',
        params: {
            correo: $rootScope.user
        },
        headers: {
            "Content-Type": "application/json",
        }

    }).success(function (response) {
        $ionicLoading.hide();
        $window.localStorage.clear();
        $rootScope.userData = false;
        $rootScope.opciones = false;
        $rootScope.iniciar = true;
        $ionicHistory.clearCache(); 
        $ionicHistory.clearHistory();
        $rootScope.user = false;
          $ionicLoading.show({
            template: 'Se ha cerrado la sesión.',
            duration: 2000
          }).then(function(){
             
        });
            $state.go('app.resumen');
    
    }).error(function (response) {
        $ionicLoading.hide();
        //console.log(response)
    });
    }
    //Cleanup the popover when we're done with it!
    /*$scope.$on('$destroy', function () {
        $scope.popover.remove();
    });*/
});