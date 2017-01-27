'use strict';

angular.module('FacaFestaApp')
  .controller('MainController', [
    '$state',
    '$scope',
    'firebase',
    function ($state, $scope, firebase) {
      
      var user = firebase.auth().currentUser;
      $scope.userData = user;
      console.log(user);
      
      $scope.menuOpen = false;

      $scope.openMenu = function () {
        $scope.menuOpen = !$scope.menuOpen;
      }
    }
  ])