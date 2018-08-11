﻿app.controller('ComponentsCtrl', function ($scope, $stateParams, ionicMaterialInk, $http) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
   
    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});