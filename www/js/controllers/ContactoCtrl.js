app.controller('ContactoCtrl', function ($scope, $stateParams, $ionicActionSheet, $timeout, ionicMaterialInk, $http, $ionicLoading, $ionicPopup , $rootScope) {
    ionicMaterialInk.displayEffect();
    $scope.$on("$ionicView.beforeEnter", function(event, data){

  });


    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});