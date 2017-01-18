'use strict';

angular.module('FacaFestaApp')
  .controller('SignUpController', [
    '$state',
    '$scope',
    'Auth',
    function ($state, $scope, Auth) {
      

      $scope.user = {};

      $scope.signup = function() {
        $scope.message = null;
        $scope.error = null;

        // Create a new user
        Auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
          .then(function(firebaseUser) {
            $state.go('auth.complete-profile',{uuidUser: firebaseUser.uid});
          }).catch(function(error) {
            alert(error);
          });
      };
    }
  ])