'use strict';

import angular from 'angular';

export function OauthButtonsController($window) {
  this.loginOauth = function(provider) {
    $window.location.href = '/auth/' + provider;
  };
}

export default angular.module('pokeanalyzerApp.oauthButtons', [])
  .directive('oauthButtons', function() {
    return {
      template: require('./oauth-buttons.html'),
      restrict: 'EA',
      controller: OauthButtonsController,
      controllerAs: 'OauthButtons',
      scope: {
        classes: '@'
      }
    };
  })
  .name;
