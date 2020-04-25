app.controller('logoutCtrl', function($cookies,$rootScope){
    $scope.logout = function(){
        $cookies.remove('user');
        $cookies.remove('password');
        $cookies.remove('email');
        $cookies.remove('fullname');
        $cookies.remove('gender');
        $cookies.remove('birthday');
        $cookies.remove('fLogin');

        $rootScope.user = "";
        $rootScope.password = "";
          $rootScope.fullname = "";
          $rootScope.email = "";
          $rootScope.gender = "";
          $rootScope.birthday = "";
        $rootScope.fLogin = false;
        window.location.href = "layout.html"
    }
});