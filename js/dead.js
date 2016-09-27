/**
 * Created by akc on 9/27/16.
 */


//angular.module('dead',[]);

angular.module('dead',["ngRoute"])
    .config(function($locationProvider,$routeProvider){//adding config file its angular route
        $routeProvider

            .when('/',{
                controller : "recordCtrl",
                templateUrl:'/views/index.html'//json object or template only

            })
            .when('/record',{

                templateUrl:'/views/record.html'//json object or template only

            })

            .otherwise({
                templateUrl:"/views/form.html"

            });

        $locationProvider
            .html5Mode(false)
            .hashPrefix('!')

    });

