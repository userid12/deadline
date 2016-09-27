angular.module('app').service('titleService',["$http",function($http){
    var dela = this;
    this.currentId = null;
    
    this.getItemList = function(){
        var url = "/service/INVENTORY_TYPE/"+dela.currentId;
        $http.get(url).then(function(response){
            
                dela.inventoryTitle = response.data;
                console.log(dela.inventoryTitle);
        
    });
    }
    
}]);