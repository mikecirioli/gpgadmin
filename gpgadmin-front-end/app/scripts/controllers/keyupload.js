'use strict';

/**
 * @ngdoc function
 * @name gpgadminFrontEndApp.controller:KeyuploadCtrl
 * @description
 * # KeyuploadCtrl
 * Controller of the gpgadminFrontEndApp
 */
angular.module('gpgadminFrontEndApp')
  .controller('KeyuploadCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.data = {};
    $scope.data.userName = 'mpatercz';
    
    function submit() {
        $http.post('http://svcgpg-hackfest.itos.redhat.com/upload/' + $scope.data.userName, {pubkey: $scope.data.pubKey})
	        .success(function() {
	            $scope.success = true;
	        }).error(function() {
	        	$scope.error = true;
	        });
    }
    
    $scope.submitFile = function(){
      var file = document.getElementById('gpg-key-file').files[0];
      var reader = new FileReader();
      
      reader.onloadend = function(e){
        $scope.data.pubKey = e.target.result;
        submit();
      };
      
      reader.readAsBinaryString(file);
    };
    
    $scope.submitTextarea = function(){
        var key = document.getElementById('gpg-public-key').value;
        $scope.data.pubKey = key;
        submit();
      };

  });
