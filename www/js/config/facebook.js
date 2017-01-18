'use strict';

angular.module('FacaFestaApp')

  .config([
    '$cordovaFacebookProvider',
    function ($cordovaFacebookProvider) {
      var appID = 383026315380254;
      var version = "v2.0"; // or leave blank and default is v2.0
      ionic.Platform.ready(function () {
        facebookConnectPlugin.browserInit(appID, appVersion);
      });
  }]);