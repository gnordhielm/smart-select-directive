angular.module('avtr')
  .directive('avSmartSelect', avSmartSelect)
  
avSmartSelect.$inject = []

function avSmartSelect() {
  
  function smartSelectController(){
  }
  
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'smartSelect.html',
    scope: {},
    // scope: {
    //   options: '=',
    //   value: '=',
    //   type: '@'
    // },
    controller: smartSelectController,
    controllerAs: 'vm',
    transclude: true,
    // bindToController: true
    bindToController: {
      options: '=',
      type: '@'
    }
  }
}
