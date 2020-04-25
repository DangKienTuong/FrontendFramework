app.controller('loginCtrl', function($scope,$http,$cookies,$rootScope,$location){
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
          $location.path('/index');
          $location.replace();
          $cookies.put('user',$scope.students[i].username);
          $cookies.put('password',$scope.students[i].password);
          $cookies.put('email',$scope.students[i].email);
          $cookies.put('gender',$scope.students[i].gender);
          $cookies.put('fullname',$scope.students[i].fullname);
          $cookies.put('birthday',$scope.students[i].birthday);
          $cookies.put('fLogin',true);

          $rootScope.fLogin = $cookies.get('fLogin');
          $rootScope.user = $cookies.get('user');
          return 1;
        }else{
          alert('Đăng nhập thất bại')
        }
      }
      return 0;
    }
  });