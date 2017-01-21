angular.module('FacaFestaApp')

  .service("woocommerce",[
    '$q',
    '$http',
    'errorHandler',
    '$ionicLoading',
    function($q,$http,errorHandler,$ionicLoading){

      var self = this;

      var request = {
        url: 'http://woocomerce-codehouse.rhcloud.com/wc-api/v3/products',
        method: 'GET' 
      }; 

      var oauth = new OAuth({
        consumer: {
          //Consumer Public Key
          public: 'ck_65697eb260eff85ea37578c0ee35491078b2f384',
          //Consumer Secrete Key
          secret: 'cs_a6c824859f08e04a526f4a691f214ce217ea1cc0'
        },
        //oauth1.0a protocol signature method
        signature_method: 'HMAC-SHA1',
        hash_function: function(base_string, key) {
          return crypto.createHmac('sha1', key).update(base_string).digest('base64');
        }
      });

      this.products = function() {
        $ionicLoading.show({template: '<ion-spinner class="light"></ion-spinner>'});

        //OAuth Parameters to call woocommerce api      
        var oauth_data = {
          oauth_consumer_key: oauth.consumer.public,
          oauth_nonce: oauth.getNonce(),
          oauth_signature_method: oauth.signature_method,
          oauth_timestamp: oauth.getTimeStamp()
        };

        //Oauth signature
        oauth_data.oauth_signature =  oauthSignature.generate(request.method,request.url,
        oauth_data,oauth.consumer.secret );
        console.log("Params : "+ JSON.stringify(oauth_data));

        var deff=$q.defer();

        $http({
          method:request.method,
          url:request.url,
          headers: {
            "Content-Type":"application/JSON",
            "Authorization":"Basic:" + btoa(oauth.consumer.secret + ":" + oauth.consumer.public)
          },
          params: oauth_data
        }).then(
          function(objS){
            $ionicLoading.hide();
            alert('Success :-    '+JSON.stringify(objS));
          },
          function(objE){
            $ionicLoading.hide();
            alert('error:-    '+JSON.stringify(objE));
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
          }
        );
        return deff.promise;
      };
    }
  ])

  .service('errorHandler',[
    '$q',
    function($q){
      this.serverErrorhandler = function(error) {
        alert("ERROR ::"+JSON.stringify(error));
        console.log("ERROR ::"+JSON.stringify(error));
      };
    }
  ])
