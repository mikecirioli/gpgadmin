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
    
    $scope.add = function(){
      var file = document.getElementById('gpg-key-file').files[0];
      var reader = new FileReader();
      
      reader.onloadend = function(e){
        $scope.data = e.target.result;
        $http.post('http://svcgpg-hackfest.itos.redhat.com/upload', {pubkey: $scope.data}).
	        success(function(data, status, headers, config) {
	        	
	          // this callback will be called asynchronously
	          // when the response is available
	        }).
	        error(function(data, status, headers, config) {
	          // called asynchronously if an error occurs
	          // or server returns response with an error status.
	        });
      };
      
      reader.readAsBinaryString(file);
    };

  });
