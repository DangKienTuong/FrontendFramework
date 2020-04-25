app.controller("updateCtrl", function ($scope,$http,$cookies,$rootScope,$location) {
    $http.get("db/Subjects.js").then(function (response) {
      $scope.subjects = response.data;
    });
    $http.get("db/Students.js").then(function (response) {
      $scope.students = response.data;
    });

    $rootScope.student = {
      username: $cookies.get('user'),
      password: $cookies.get('password'),
      email: $cookies.get('email'),
      fullname: $cookies.get('fullname'),
      gender: $cookies.get('gender'),
      birthday: $cookies.get('birthday')
    };
    

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
      var i;
      for(i=0; i <$scope.students.length; i++){
        if($scope.students[i].username == $cookies.get('user')){
          $scope.students[i] = $rootScope.student;
      alert('Cập nhật thành công')
      return 1;
        }else{
          alert('Cập nhật thất bại')
        }
      }
    };
    $scope.delete = function () {
      $scope.students.splice($scope.index, 1);
      $scope.clear();
    };
    $scope.cancel = function () {
      var i;
      for(i=0; i <$scope.students.length; i++){
        if($scope.students[i].username == $cookies.get('user')){
          $rootScope.student = angular.copy($scope.students[i]);
        }
      }
    };
    $scope.clear = function () {
      $scope.student = {};
      $scope.index = -1;
    };
  });