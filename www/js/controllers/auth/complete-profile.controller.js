'use strict';

angular.module('FacaFestaApp')
  .controller('CompleteProfileController', [
    '$state',
    '$scope',
    '$stateParams',
    'firebase',
    'ngToast',
    function ($state, $scope, $stateParams, firebase, ngToast) {
      
      var db = firebase.database().ref('/users/' + $stateParams.uuidUser);
      var user = firebase.auth().currentUser;
      
      $scope.user = {
        full_name: '',
        document_id: '',
        postal_code: '',
        address: '',
        city: '',
        state: '',
        number: '',
        extra_info: '',
        birthday: ''
      };

      $scope.updateUserProfile = function () {
        db.set({
          full_name: $scope.user.full_name,
          document_id: $scope.user.document_id,
          postal_code: $scope.user.postal_code,
          address: $scope.user.address,
          city: $scope.user.city,
          state: $scope.user.state,
          number: $scope.user.number,
          extra_info: $scope.user.extra_info,
          birthday: $scope.user.birthday
        }).then(
          function (res) {
            ngToast.create({
              className: 'success',
              content: 'Dados salvos com sucesso!! ;D'
            })
            $state.go('app.home');
          },
          function (err) {
            console.log(err)
          }
        )

      };

    }
  ])