angular.module('app').service('mainService',["$http",function($http){
    var opt = this;
    this.currentId = null;
    
    this.getMainList = function(){
        var url = "/service/itemtype/"+opt.currentId;
        
        $http.get(url).then(function(response){
            
                opt.inventoryMain = response.data;
                //alert("ThIS IS FROM SerVICE")
        });
    }
    
}]);