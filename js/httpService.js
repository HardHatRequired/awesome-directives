var app = angular.module('musicApp');

app.service('httpService', function($http){
	this.getData = function(query) {
	  return $http({'method': 'JSONP', 'url': 'https://itunes.apple.com/search?term=' + query + '&callback=JSON_CALLBACK' })

	  };
})
