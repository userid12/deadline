/**
 * Created by akc on 9/27/16.
 */
angular.module('dead').controller("recordCtrl",["$scope", "record",function($scope, record) {



    console.log("From controller");
    console.log(record.person);

    $scope.$watch(function(){
            return record.student;

        },
        function(newval, oldVal){
            if (oldVal !=  newval){
                console.log("from watchlist");
                console.log(newval);
                console.log("New val");
                console.log(oldVal);


                $scope.student=newval;
            }
        });

    $scope.$watch(function(){
            return record.studentid;

        },
        function(newval, oldVal){
            if (oldVal !=  newval){
                console.log("from watchlist");
                console.log(newval);
                console.log("New val");
                console.log(oldVal);


                $scope.studentid=newval;
            }
        });



}]);

