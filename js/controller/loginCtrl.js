app.controller('loginCtrl', function($scope,$http){
    $http.get('db/Subjects.js').then(function(response){
      $scope.subjects = response.data;
    });
    $http.get('db/Students.js').then(function(response){
      $scope.students = response.data;
    });

    $scope.user = {};

    $scope.login = function(){
      var i;
      for(i=0; i <$scope.students.length; i++){
        if($scope.students[i].username == $scope.user.username && $scope.students[i].password == $scope.user.password){
          window.location.href = "#!index";
          return 1;
        }else{
          alert('Đăng nhập thất bại')
        }
      }
      return 0;
    }
  });