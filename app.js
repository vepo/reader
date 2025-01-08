angular.module('readerApp', [])
  .controller('ViewController', ['$subscriptions', function($subscriptions) {
    console.log('Starting View Controller', $subscriptions, $subscriptions.call());
  }])
  .controller('SubscriptionsController', ['$subscriptions', function($subscriptions) {
    console.log('Starting Subscriptions Controller', $subscriptions, $subscriptions.call());
    var ctrl = this;
    ctrl.subscriptions = [{
      rss: "https://blog.vepo.dev/atom.xml",
      title: "vepo",
      subtitle: "Um repositório para todos os posts, palestras e tutoriais que já fiz. Java, Desenvolvimento de Software e reflexões sobre filosofia",
      name: "Blog: Victor Osório"
    }];
    ctrl.add = function() {
      console.log("Adding new subscription...");
    }
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
