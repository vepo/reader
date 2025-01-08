angular.module('readerApp', [])
  .controller('ViewController', ['$subscriptions', function($subscriptions) {
    console.log('Starting View Controller', $subscriptions);
  }])
  .controller('SubscriptionsController', ['$subscriptions', function($subscriptions) {
    console.log('Starting Subscriptions Controller', $subscriptions);    
  }])
  .factory('$subscriptions', ['$http', function($http) {
    console.log('Starting Subscriptions Service', $http);
  });
