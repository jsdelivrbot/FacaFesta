'use strict';

angular.module('FacaFestaApp')
  .controller('MainController', [
    '$state',
    '$scope',
    function ($state, $scope) {
      
      $scope.menuOpen = false;

      $scope.openMenu = function () {
        $scope.menuOpen = !$scope.menuOpen;
      }
    }
  ])