'use strict';

angular.module('FacaFestaApp')
  .factory('Auth', [
    '$firebaseAuth',
    function($firebaseAuth){
    
      return $firebaseAuth();

    }
  ])