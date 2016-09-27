angular.module('dead').service('mainService',["$http",function($http){
    var opt = this;
    this.currentId = null;
    
    this.getMainList = function(){
        var url = "/service/person/"+opt.currentId;
        
        $http.get(url).then(function(response){
            
                opt.inventoryMain = response.data;

        });
    }
    
}]);