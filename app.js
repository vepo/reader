angular.module('readerApp', [])
  .controller('ViewController', ['$subscriptions', function($subscriptions) {
    console.log('Starting View Controller', $subscriptions, $subscriptions.call());
  }])
  .controller('SubscriptionsController', ['$subscriptions', function($subscriptions) {
    console.log('Starting Subscriptions Controller', $subscriptions, $subscriptions.call());    
    
  }])
  .factory('$subscriptions', ['$http', function($http) {
    console.log('Starting Subscriptions Service', $http);
    return {
      call: function() {
        console.log("Calling");
        return "yeah";
      }
    };
  }]);
