/**
 * Created by akc on 9/27/16.
 */
angular.module('dead').service('record',["$http",function($http){
    var obj = this;

    $http.get("/service/person").then(function(response){

        obj.inventoryTypes = response.data;
        console.log(obj.inventoryTypes);
    });
}]);




