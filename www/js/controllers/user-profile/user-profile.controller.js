'use strict';

angular.module('FacaFestaApp')
  .controller('ProfileController',[
    '$scope',
    '$state',
    '$stateParams',
    'firebase',
    'ngToast',
    'user',
    '$ionicLoading',
    'CepAPI',
    function ($scope, $state, $stateParams, firebase, ngToast, user, $ionicLoading, CepAPI) {

      $scope.disabledAddress = true;

      var db = firebase.database().ref('/users/' + $stateParams.uuidUser);
      db.once('value').then(
        function (res) {
          $ionicLoading.show({
            template: 'Loading...'
          });
          $scope.user = res.val();
          $ionicLoading.hide();
        },
        function (err) {
          
        }
      );
    
      var user = firebase.auth().currentUser;
      $scope.userData = user;
    
      $scope.searchAddressInformation = function (postal_code) {
        $ionicLoading.show({
          template: 'Buscando dados do CEP...'
        });
        CepAPI.getAddress(postal_code).then(
          function (res) {
            console.log(res.data);
            $scope.user.address = res.data.logradouro;
            $scope.user.city = res.data.localidade;
            $scope.user.state = res.data.uf;
            $scope.user.neighbour = res.data.bairro;
            $ionicLoading.hide();
          },
          function (res) {

          }
        )
      }

      $scope.save = function () {
        var displayName = $scope.user.full_name.split(" ");
        displayName = displayName[0];
        $ionicLoading.show({
          template: 'Atualizando Nome de Usuário'
        });
        if(displayName != user.displayName) {
          user.updateProfile({
            displayName: displayName
          }).then(function() {
            $ionicLoading.hide();
            ngToast.create({
              className: 'success',
              content: 'Login atualizado'
            })
          }, function(error) {
            $ionicLoading.hide();
            ngToast.create({
              className: 'error',
              content: 'OPS, something bad just happen'
            })
          });
        }

        $ionicLoading.show({
          template: 'Atualizando dados..'
        })
        db.update({
          full_name:      $scope.user.full_name,
          document_id:    $scope.user.document_id,
          postal_code:    $scope.user.postal_code,
          address:        $scope.user.address,
          number:         $scope.user.number,
          extra_info:     $scope.user.extra_info,
          neighbour:      $scope.user.neighbour,
          city:           $scope.user.city,
          state:          $scope.user.state,
          email:          $scope.user.email,
          telephone:      $scope.user.telephone
        }).then(
          function () {
            ngToast.create({
              className: 'success',
              content: 'Dados atualizados'
            })
          }
        )
        $ionicLoading.hide();

      }


    }
  ])