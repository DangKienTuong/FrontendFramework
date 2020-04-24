app.controller("signupCtrl", function ($scope, $http) {
    $http.get("db/Subjects.js").then(function (response) {
      $scope.subjects = response.data;
    });
    $http.get("db/Students.js").then(function (response) {
      $scope.students = response.data;
    });

    $scope.user = {};

    $scope.signup = function () {
      if($scope.user.password.length == 0 || $scope.user.repassword.length == 0){
        alert("Không được bỏ trống!");
      }
      if (
        $scope.user.password == $scope.user.repassword
      ) {
        $scope.students.push($scope.user);
        alert("Tài khoản mới được tạo: Tài khoản: "+$scope.students[$scope.students.length-1].username +", Mật khẩu: "+$scope.students[$scope.students.length-1].password+", Email: "+$scope.students[$scope.students.length-1].email);
      } else {
        alert("Thất bại!");
      }
    };
  });