'use strict';

angular.module('FacaFestaApp')

  .controller('LandingController',[
    '$state',
    '$scope',
    'Auth',
    function ($state, $scope, Auth){

      $scope.fbLogin = function () {
        $cordovaFacebook.login(["public_profile", "email", "user_friends"]).then(
          function(success) {
            console.log(success);
          },
          function (error) {
            console.log(error)
          }
        );
      }

      // $scope.getAllProducts = function(){
      //   woocommerce.products().then(
      //     function(res){
      //       console.log(res)
      //     },
      //     function(err){
      //       console.log(err)
      //     }
      //   );
      // }();

    }
  ])



// 'use strict';

// angular.module('FacaFestaApp')

//   .controller('LandingController',[
//     '$state',
//     '$scope',
//     'firebase',
//     '$cordovaFacebook',
//     function ($state, $scope, firebase, $cordovaFacebook){

//       var provider = new firebase.auth.FacebookAuthProvider();

//       console.log(provider);

      // $scope.fbLogin = function () {
      //   $cordovaFacebook.login(["public_profile", "email", "user_friends"]).then(
      //     function(success) {
      //       console.log(success);
      //     },
      //     function (error) {
      //       console.log(error)
      //     }
      //   );
      // }


//   var options = {
//     method: "feed",
//     link: "http://example.com",
//     caption: "Such caption, very feed."
//   };
//   $cordovaFacebook.showDialog(options)
//     .then(function(success) {
//       // success
//     }, function (error) {
//       // error
//     });


//   $cordovaFacebook.api("me", ["public_profile"])
//     .then(function(success) {
//       // success
//     }, function (error) {
//       // error
//     });


//   $cordovaFacebook.getLoginStatus()
//     .then(function(success) {
//       /*
//       { authResponse: {
//           userID: "12345678912345",
//           accessToken: "kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn",
//           session_Key: true,
//           expiresIn: "5183738",
//           sig: "..."
//         },
//         status: "connected"
//       }
//       */
//     }, function (error) {
//       // error
//     });

//   $cordovaFacebook.getAccessToken()
//     .then(function(success) {
//       // success
//     }, function (error) {
//       // error
//     });

//   $cordovaFacebook.logout()
//     .then(function(success) {
//       // success
//     }, function (error) {
//       // error
//     });

//     }])