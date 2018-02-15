angular.module('mainController',[])
.controller('mainCnt',function($scope,$http){
	$scope.motors = [];
    $scope.activeMotor = {}; 

    $http({
        method : "get",
        url : "http://localhost/angularSite/podaci.php/json"
    }).then(function(result){
        $scope.motors = result.data;
    },function(error){
        console.log(error);
    })
    $scope.display = function(motor){
        $scope.activeMotor = motor;
    }
});
