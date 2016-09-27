angular.module('app').service('navService',["$http",function($http){
    var obj = this;
    
    $http.get("/service/INVENTORY_TYPE").then(function(response){
            
                obj.inventoryTypes = response.data;
                console.log(obj.inventoryTypes);
        
    });
}]);









