/**
 * Created by akc on 9/27/16.
 */
angular.module('dead').controller("recordCtrl",["$scope", "record",function($scope, navService) {
    $scope.person="";

    console.log("From controller");
    console.log(record.person);

    $scope.$watch(function(){
            return record.person;

        },
        function(newval, oldVal){
            if (oldVal !=  newval){
                console.log("from watchlist");
                console.log(newval);
                console.log("New val");
                console.log(oldVal);
                console.log("oldVal");

                $scope.person=newval;
            }
        });

}]);

