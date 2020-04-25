app.controller("resetCtrl", function ($scope, $http) {
    $http.get("db/Subjects.js").then(function (response) {
      $scope.subjects = response.data;
    });
    $http.get("db/Students.js").then(function (response) {
      $scope.students = response.data;
    });

    $scope.user = {};

    $scope.reset = function () {
      var i;
      for (i = 0; i < $scope.students.length; i++) {
        if (
          $scope.students[i].username == $scope.user.username &&
          $scope.students[i].email == $scope.user.email
        ) {
          $scope.user = $scope.students[i];
          return 1;
        } else {
          alert("Username và email không tồn tại");
          return 1;
        }
      }
      return 0;
    };
  });