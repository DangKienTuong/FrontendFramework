app.controller("testCtrl", function ($scope, $http,$interval,$routeParams) {
    $http.get("db/Subjects.js").then(function (response) {
      $scope.subjects = response.data;
    });

    $scope.ch = 'db/Quizs/'+$routeParams.mh+'.js';
    $scope.tenMonHoc = $routeParams.ten;
    $http.get($scope.ch).then(function (response) {
      $scope.quizs = response.data;
    });
    //tính điểm



    $scope.tong_diem=0;
    $scope.ket_qua = 0;
    $scope.tinh_diem= function (diem_cua_cau_hoi,dap_an,tra_loi){
      if(dap_an == tra_loi){
        $scope.tong_diem += diem_cua_cau_hoi;
      }
    };
    $scope.xacnhan = function(){
      $scope.ket_qua = $scope.tong_diem;
      alert('Điểm của bạn là: '+$scope.ket_qua+'/'+$scope.quizs.length);
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
          alert('Điểm của bạn là: '+$scope.ket_qua+'/'+$scope.quizs.length);
          window.location.href="#!index";
      }else{
        $scope.phut -= 1;
        $scope.giay = 59;
      }
      }
      
    },1000);


    $scope.begin = 0;

          $scope.first = function(){
              $scope.begin = 0;
          };

          $scope.prev = function(){
              if($scope.begin > 0){
                  $scope.begin -= 1;
              }
          };

          $scope.next = function(){
              if($scope.begin < (Math.ceil($scope.quizs.length/1) - 1)*1){
                  $scope.begin += 1;
              }
          };

          $scope.last = function(){
              $scope.begin = Math.ceil($scope.quizs.length/1) -1;
          }

  });