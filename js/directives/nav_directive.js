angular.module('dead').directive('navBar',function(){
    return{
        restrict: "EAC",
        templateUrl: '/views/nav.html',
        controller : 'titleCtrl'
    };
});