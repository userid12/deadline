/**
 * Created by akc on 9/27/16.
 */
angular.module('dead').service('record',["$http",function($http){

    var obj = this;
    $http.get("/service/person").then(function(response){
        console.log("logging student from PERSON table");
        console.log("End of response");


        obj.student = response.data;
        console.log(obj.student);
    });


    this.id=null;

    this.studentid =function() {
        var url = "/service/person/" + obj.id;
        $http.get("url").then(function (response) {

            obj.studentid = response.data;
            console.log(obj.studentid);

        });
    }

}]);




