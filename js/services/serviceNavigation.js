angular.module('dead').service('navService',["$http",function($http){
    var obj = this;
    
    $http.get("/service/person").then(function(response){
            
                obj.inventoryTypes = response.data;
                console.log(obj.inventoryTypes);
        
    });
}]);









