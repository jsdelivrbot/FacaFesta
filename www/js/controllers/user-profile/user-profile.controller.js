'use strict';

angular.module('FacaFestaApp')
  .controller('ProfileController',[
    '$scope',
    '$state',
    '$stateParams',
    'firebase',
    'ngToast',
    function ($scope, $state, $stateParams, firebase, ngToast) {

      var db = firebase.database().ref('/users/' + $stateParams.uuidUser);

      $scope.getUserData = function () {
        db.once('value').then(
          function (res) {
            console.log(res.val());
          },
          function (err) {
            console.log(err);
          }
        )
      }();

      // console.log($scope.userProfile);

    }
  ])