// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//var path = 'http://192.168.100.246/ideconNuevo/public/';
var path = 'http://192.168.100.238/ideconNuevo/public/';
var idtoken;
var app = angular.module('starter', ['ionic', 'ionic-material', 'chart.js' , 'ngCordova']);
app.run(function ($ionicPlatform) {
  

    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        /*window.FirebasePlugin.getToken(function(token) {
            // save this server-side and use it to push notifications to this device
            console.log(token);
            //alert('token:'+token);
            idtoken = token;
        }, function(error) {
            console.error(error);
            //alert('error'+error);
        });*/

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
          
        }



        


    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.resumen', {
        url: '/resumen',
        views: {
            'menuContent': {
                templateUrl: 'templates/resumen.html',
                controller: 'ResumenCtrl'
            }
        }
    })
    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            }
        }
    })
    .state('app.registro', {
        url: '/registro',
        views: {
            'menuContent': {
                templateUrl: 'templates/registro.html',
                controller: 'RegistroCtrl'
            }
        }
    })
    .state('app.tiporegistro', {
        url: '/tiporegistro',
        views: {
            'menuContent': {
                templateUrl: 'templates/tiporegistro.html',
                controller: 'RegistroCtrl'
            }
        }
    })
    .state('app.seleccion', {
        url: '/seleccion',
        views: {
            'menuContent': {
                templateUrl: 'templates/seleccion.html',
                controller: 'RegistroCtrl'
            }
        }
    })
    .state('app.registroexistente', {
        url: '/registroexistente',
        views: {
            'menuContent': {
                templateUrl: 'templates/registroexistente.html',
                controller: 'RegistroCtrl'
            }
        }
    })
    .state('app.Evento', {
        url: '/evento',
        views: {
            'menuContent': {
                templateUrl: 'templates/evento.html',
                controller: 'EventoCtrl'
            }
        }
    })

    .state('app.Culminados', {
        url: '/culminados',
        views: {
            'menuContent': {
                templateUrl: 'templates/culminados.html',
                controller: 'CulminadosCtrl'
            }
        }
    })

    .state('app.DetalleEvento', {
        url: '/detallevento',
        views: {
            'menuContent': {
                templateUrl: 'templates/detalleEvento.html',
                controller: 'DetalleEventoCtrl'
            }
        }
    })

    .state('app.DetalleEventoF', {
        url: '/detalleventofinalizado',
        views: {
            'menuContent': {
                templateUrl: 'templates/detalleventofinalizado.html',
                controller: 'DetalleEventoFCtrl'
            }
        }
    })
    .state('app.Hotel', {
        url: '/hotel',
        views: {
            'menuContent': {
                templateUrl: 'templates/hoteles.html',
                controller: 'DetalleEventoCtrl'
            }
        }
    })
    .state('app.Restaurante', {
        url: '/restaurante',
        views: {
            'menuContent': {
                templateUrl: 'templates/restaurantes.html',
                controller: 'DetalleEventoCtrl'
            }
        }
    })

    .state('app.Lugar', {
        url: '/lugar',
        views: {
            'menuContent': {
                templateUrl: 'templates/lugares.html',
                controller: 'DetalleEventoCtrl'
            }
        }
    })

    .state('app.Info', {
        url: '/info',
        views: {
            'menuContent': {
                templateUrl: 'templates/info.html',
                controller: 'DetalleEventoCtrl'
            }
        }
    })

    .state('app.Junta', {
        url: '/junta',
        views: {
            'menuContent': {
                templateUrl: 'templates/junta.html',
                controller: 'DetalleEventoCtrl'
            }
        }
    })

    .state('app.EmpresasP', {
        url: '/empresasp',
        views: {
            'menuContent': {
                templateUrl: 'templates/empresasp.html',
                controller: 'DetalleEventoCtrl'
            }
        }
    })

    .state('app.EmpresasC', {
        url: '/empresasc',
        views: {
            'menuContent': {
                templateUrl: 'templates/empresasc.html',
                controller: 'DetalleEventoCtrl'
            }
        }
    })

    .state('app.Actividad', {
        url: '/actividad',
        views: {
            'menuContent': {
                templateUrl: 'templates/actividades.html',
                controller: 'DetalleEventoCtrl'
            }
        }
    })

    .state('app.Interes', {
        url: '/interese',
        views: {
            'menuContent': {
                templateUrl: 'templates/interes.html',
                controller: 'DetalleEventoCtrl'
            }
        }
    })
    

    .state('app.Configuracion', {
        url: '/configuracion',
        views: {
            'menuContent': {
                templateUrl: 'templates/configuracion.html',
                controller: 'ConfiguracionCtrl'
            }
        }
    })
    .state('app.Encuesta', {
        url: '/encuesta',
        views: {
            'menuContent': {
                templateUrl: 'templates/encuesta.html',
                controller: 'EncuestaCtrl'
            }
        }
    })

    .state('app.Consumo', {
        url: '/consumo',
        views: {
            'menuContent': {
                templateUrl: 'templates/consumo.html',
                controller: 'DetalleEventoFCtrl'
            }
        }
    })
    .state('app.Editarperfil', {
        url: '/editarperfil',
        views: {
            'menuContent': {
                templateUrl: 'templates/editarperfil.html',
                controller: 'ConfiguracionCtrl'
            }
        }
    })
    .state('app.Perfil', {
        url: '/perfil',
        views: {
            'menuContent': {
                templateUrl: 'templates/perfil.html',
                controller: 'PerfilCtrl'
            }
        }
    })
    .state('app.Contacto', {
        url: '/contacto',
        views: {
            'menuContent': {
                templateUrl: 'templates/contacto.html',
                controller: 'ContactoCtrl'
            }
        }
    })
    .state('app.Editarcontrasena', {
        url: '/editarcontrasena',
        views: {
            'menuContent': {
                templateUrl: 'templates/editarcontrasena.html',
                controller: 'ConfiguracionCtrl'
            }
        }
    })
    
    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    
    .state('app.Comollegar', {
        url: '/comollegar',
        views: {
            'menuContent': {
                templateUrl: 'templates/comollegar.html',
                controller: 'ComollegarCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/resumen');
});
