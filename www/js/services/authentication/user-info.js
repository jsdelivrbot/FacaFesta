'use strict';

angular.module('FacaFestaApp')
  .factory('User', [
    '$firebaseUser',
    function($firebaseUser){
      console.log('Alive');
      return $firebaseUser();

    }
  ])