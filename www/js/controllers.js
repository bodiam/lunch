angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ListCtrl', function($scope, $ionicModal, Restaurants) {

  $scope.restaurants = Restaurants.all();

  $scope.clearSearch = function() {
    $scope.restaurants.searchQuery = '';
  };

  $ionicModal.fromTemplateUrl('templates/modal-filter.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

})

.controller('ListDetailCtrl', function($scope, $stateParams, Restaurants) {
  $scope.restaurant = Restaurants.get($stateParams.listId);
})

.controller('RestaurantMenuCtrl', function($scope, $stateParams, Restaurants) {
  $scope.restaurant = Restaurants.get($stateParams.id);
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('MapController', function($scope, $ionicLoading) {

      $scope.myActiveSlide = 0;

      $scope.initialise = function() {
        console.log("In Google.maps.event.addDomListener");
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };


        console.log(mapOptions);

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        //
        //navigator.geolocation.getCurrentPosition(function(pos) {
        //  console.log(pos);
        //  map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        //  var myLocation = new google.maps.Marker({
        //    position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        //    map: map,
        //    title: "My Location"
        //  });
        //});

        $scope.map = map;
      };
      google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());

      /*
  google.maps.event.addDomListener(document.getElementById("map"), 'load', function() {
    alert('x');

    var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    alert(map);

    navigator.geolocation.getCurrentPosition(function(pos) {
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map,
        title: "My Location"
      });
    });

    $scope.map = map;*/
  //});
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});