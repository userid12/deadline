/**
 * Created by akc on 9/27/16.
 */
angular.module('dead').service('record',["$http",function($http){


    $http.get("/service/person").then(function(response){
        console.log("logging student from PERSON table");
        console.log("End of response");


        obj.student = response.data;
        console.log(obj.student);
    });

    var obj = this;
    this.id=null;

    $http.get("/service/person/1").then(function(response) {
        console.log("logging to student response for id");
        console.log(obj.inventoryTypes);

        obj.studentid = response.data;
        console.log(obj.studentid);


    } );


}]);




