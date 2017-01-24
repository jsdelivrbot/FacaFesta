'use strict';

angular.module('FacaFestaApp')
  .controller('MainController', [
    '$state',
    '$scope',
    'user',
    function ($state, $scope, user) {
      
      $scope.userData = user;
      
      $scope.menuOpen = false;

      $scope.openMenu = function () {
        $scope.menuOpen = !$scope.menuOpen;
      }
    }
  ])