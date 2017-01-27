'use strict';

angular.module('FacaFestaApp')
  .factory('CepAPI', [
    '$http',
    function($http){

      var api = {};

      var _getAddress = function (cep) {
        return $http({
          url: 'http://viacep.com.br/ws/' + cep + '/json',
          method: 'GET'
        }).then(
          function (res) {
            return res
          }
        )
      }

      api.getAddress = _getAddress;

      return api;

  }])