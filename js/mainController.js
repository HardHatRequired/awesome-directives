angular.module('musicApp')

.controller('mainController', function ($scope, httpService) {

  $scope.queries = [];

  $scope.searchSong = function(query) {
    httpService.getdata(query)
    .then(function(data) {
      console.info(data);
      if(response.data.results && response.data.results.length > 0) {
        $scope.queries.push(query);
        $scope.query = '';
      } else {
        alertify.log('There are no results');
      }

    })
    .catch(function(err){
      console.error(data);
      alertify.error("There was a problem with your request");
    })

  }
  $scope.querySuggestion = function(suggestion) {
    $scope.query = suggestion
  }

});
