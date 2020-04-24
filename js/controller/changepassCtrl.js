app.controller("changepassCtrl", function ($scope, $http) {
    $http.get("db/Subjects.js").then(function (response) {
      $scope.subjects = response.data;
    });
    $http.get("db/Students.js").then(function (response) {
      $scope.students = response.data;
    });

    $scope.user = {};
    $scope.temp = {};

    $scope.changepass = function () {
      var i;
      for (i = 0; i < $scope.students.length; i++) {
        if (
          $scope.students[i].username == $scope.user.username &&
          $scope.students[i].password == $scope.temp.oldpassword &&
          $scope.user.password == $scope.temp.repassword
        ) {
          $scope.students[i] = $scope.user;
          alert("Mật khẩu được đổi lại thành: "+$scope.students[i] .password);
          return 1;
        } else {
          alert("Thất bại!");
        }
      }
      return 0;
    };
  });