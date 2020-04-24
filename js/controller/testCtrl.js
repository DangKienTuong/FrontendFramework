app.controller("testCtrl", function ($scope, $http,$interval) {
    $http.get("db/Subjects.js").then(function (response) {
      $scope.subjects = response.data;
    });
    $http.get("db/Quizs/ADAV.js").then(function (response) {
      $scope.quizs = response.data;
    });

    //tính điểm
    $scope.tong_diem=0;
    $scope.tinh_diem= function (diem_cua_cau_hoi,dap_an,tra_loi){
      if(dap_an == tra_loi){
        $scope.tong_diem += diem_cua_cau_hoi;
      }
    };

  

    //đồng hồ
    $scope.phut = 1;
    $scope.giay = 59;
    $interval(function(giay){
      $scope.time = ($scope.phut<10)?('0'+$scope.phut.toString()):$scope.phut.toString();
      $scope.time += ":";
      $scope.time += ($scope.giay<10)?('0'+$scope.giay.toString()):$scope.giay.toString();
      $scope.giay -= 1;
      if($scope.giay == 0){
        if($scope.phut == 0){
        alert('Điểm số của bạn là: '+tong_diem);
      }else{
        $scope.phut -= 1;
        $scope.giay = 59;
      }
      }
      
    },1000);
  });