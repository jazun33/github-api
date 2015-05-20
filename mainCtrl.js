var app = angular.module('github-api');

app.controller("GitHubController", function($scope, githubService){

  $scope.showData = false;

  $scope.getUserData = function (username) {
    $scope.showData = true;
    return githubService.getUser(username)
      .then(function(res) {
        $scope.user = res.data;
    });
  }

});