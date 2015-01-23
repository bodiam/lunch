angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

.factory('Restaurants', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var restaurants = [{
    id: 0,
    name: 'Grandcafe Lokaal',
    location: 'Amsterdam (0,2 km)',
    type: 'Bbq/grill, Internationaal',
    thumbnail: 'http://couverts.nl/media/foto/280x280/3088/781da1b0-6948-4a1b-b792-c4dec370f34f.jpg'
  }, {
    id: 1,
    name: 'CtheCity',
    location: 'Amsterdam (0,6 km)',
    type: 'Hollands',
    thumbnail: 'http://couverts.nl/media/foto/280x280/1988/030be71e-734c-49c5-a794-adc7ef7c3156.jpg'
  }, {
    id: 2,
    name: 'Ctaste, dineren in het donker',
    location: 'Amsterdam (0,6 km)',
    type: 'Internationaal',
    thumbnail: 'http://couverts.nl/media/foto/280x280/185/9763b0a8-c72c-436c-885a-2ff3a0ca16c9.jpg'
  }, {
    id: 3,
    name: 'Bistro Zuid',
    location: 'Amsterdam (0,8 km)',
    type: 'Bistro',
    thumbnail: 'http://couverts.nl/media/foto/280x280/1972/9aa061dc-c679-4483-a2a2-597065273b65.jpg'
  }, {
    id: 4,
    name: 'Hotel Notting Hill',
    location: 'Amsterdam (0,9 km)',
    type: 'Brass',
    thumbnail: 'http://couverts.nl/media/foto/280x280/1843/fee8a8bd-daeb-43ca-852d-60c65368a767.jpg'
  }, {
    id: 5,
    name: 'Westewind',
    location: 'Amsterdam (1,1 km)',
    type: 'Bistro / Europees / Frans',
    thumbnail: 'http://couverts.nl/media/foto/280x280/3161/0299cad4-ad1b-4b6d-9055-9f402fc0fa03.jpg'
  }];

  return {
    all: function() {
      return restaurants;
    },
    remove: function(restaurant) {
      restaurants.splice(restaurants.indexOf(restaurant), 1);
    },
    get: function(restaurantId) {
      for (var i = 0; i < restaurants.length; i++) {
        if (restaurants[i].id === parseInt(restaurantId)) {
          return restaurants[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
