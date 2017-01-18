'use strict';

angular.module('FacaFestaApp')
  .controller('SignInController', [
    '$state',
    '$scope',
    'Auth',
    function ($state, $scope, Auth) {
      
      $scope.user = {}

      $scope.login = function () {
        Auth.$signInWithEmailAndPassword($scope.user.email, $scope.user.password).then(
          function (res) {
            $state.go('app.home');
          },
          function (err) {
            console.log(err);
          }
        )
      };

    }
  ])