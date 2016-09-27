angular.module('dead').controller("navCtrl",["$scope", "navService",function($scope, navService) {
    $scope.inventoryTypes="";
   
    console.log("From controller");
    console.log(navService.inventoryTypes);
   
    

    $scope.$watch(function(){
        return navService.inventoryTypes;
            
    },
        function(newval, oldVal){
        if (oldVal !=  newval){
            console.log("from watchlist");
            console.log(newval);
            console.log("New val");
            console.log(oldVal);
            console.log("oldVal");
          
            $scope.inventoryTypes=newval;
        }
    });
       
}]);


