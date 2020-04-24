app.controller("updateCtrl", function ($scope, $http) {
    $http.get("db/Subjects.js").then(function (response) {
      $scope.subjects = response.data;
    });
    $http.get("db/Students.js").then(function (response) {
      $scope.students = response.data;
    });
    $scope.student = {};
    

    $scope.index = -1;
    $scope.edit = function (index) {
      $scope.student = angular.copy($scope.students[index]);
      $scope.index = index;
    };
    $scope.save = function () {
      $scope.students.push($scope.student);
      $scope.clear();
    };
    $scope.update = function () {
      $scope.students[$scope.index] = $scope.student;
      $scope.clear();
    };
    $scope.delete = function () {
      $scope.students.splice($scope.index, 1);
      $scope.clear();
    };
    $scope.cancel = function () {
      if ($scope.index == -1) {
        $scope.clear();
      } else {
        $scope.edit($scope.index);
      }
    };
    $scope.clear = function () {
      $scope.student = {};
      $scope.index = -1;
    };
  });