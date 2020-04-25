app.controller("allCtrl", function ($scope, $http) {

    $http.get("db/Subjects.js").then(function (response) {
        $scope.subjects = response.data;
      });
    $scope.begin = 0;
          $scope.pageCount = Math.ceil($scope.subjects.length/3);

          $scope.first = function(){
              $scope.begin = 0;
          };

          $scope.prev = function(){
              if($scope.begin > 0){
                  $scope.begin -= 3;
              }
          };

          $scope.next = function(){
              if($scope.begin < ($scope.pageCount - 1)*3){
                  $scope.begin += 3;
              }
          };

          $scope.last = function(){
              $scope.begin = ($scope.pageCount -1)*3
          }
        });