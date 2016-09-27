angular.module('dead').controller("titleCtrl",["$scope", "titleService","navService","mainService",function($scope, titleService, navService, mainService) {
    //alert();
    
    $scope.title = "Welcome to Deadline";
    
    $scope.inventoryTitle="";
    $scope.inventoryType="";
    $scope.inventoryMain="";
    
    console.log("From controller");
    console.log(navService.inventoryTypes);
    console.log(titleService.inventoryTitle);
    console.log(mainService.inventoryMain);
    

    $scope.$watch(function(){
        return titleService.inventoryTitle;
            
    },
        function(newval, oldVal){
        if (oldVal !=  newval){
            console.log("from watchlist");
            console.log(newval);
            console.log("New val");
            console.log(oldVal);
            console.log("oldVal");
          
            $scope.inventoryTitle=newval;
        }
    });
    
    $scope.$watch(function(){
        return mainService.inventoryMain;
            
    },
        function(newval, oldVal){
        if (oldVal !=  newval){
            console.log("from watchlist");
            console.log(newval);
            console.log("New val");
            console.log(oldVal);
            console.log("oldVal");
          
            $scope.inventoryMain=newval;
            console.log($scope.inventoryMain);
        }
    });
    
    

    $scope.test=function(id, type){

        titleService.currentId = id;
        titleService.getItemList();
        
        mainService.currentId = id;
        mainService.getMainList();
        
       $scope.title= type;
        


    
       
}}]);


