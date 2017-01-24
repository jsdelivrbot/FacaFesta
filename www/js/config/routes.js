'use strict';

angular.module('FacaFestaApp')

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('auth',{
        url: '/auth',
        abstract: true,
        template: '<div ui-view=""></div>'
      })
      .state('auth.landing',{
        url: '/landing',
        templateUrl: 'templates/landing/landing.html',
        controller: 'LandingController'
      })
      .state('auth.signin', {
        url: '/signin',
        templateUrl: 'templates/landing/signin.html',
        controller: 'SignInController'
      })
      .state('auth.signup', {
        url: '/signup',
        templateUrl: 'templates/landing/signup.html',
        controller: 'SignUpController'
      })
      .state('auth.complete-profile', {
        url: '/complete-profile/:uuidUser',
        templateUrl: 'templates/landing/complete-profile.html',
        controller: 'CompleteProfileController'
      })

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/app/main.html',
        resolve: {
          user: function (firebase) {
            return firebase.auth().currentUser;
          }
        },
        controller: 'MainController'
      })

      .state('app.home', {
        url: '/home',
        templateUrl: 'templates/app/home.html',
        controller: 'HomeController'
      })
      .state('app.user-profile',{
        url: '/profile/:uuidUser',
        templateUrl: 'templates/app/user-profile.html',
        controller: 'ProfileController'
      })

      .state('app.browse', {
          url: '/browse',
          views: {
            'menuContent': {
              templateUrl: 'templates/browse.html'
            }
          }
        })
        .state('app.playlists', {
          url: '/playlists',
          views: {
            'menuContent': {
              templateUrl: 'templates/playlists.html',
              controller: 'PlaylistsCtrl'
            }
          }
        })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/auth/landing');
  });