(function() {

angular.module('mindgame').directive('logItem', LogItemDirective);

function LogItemDirective() {
    return {
        restrict: 'E',
        bindToController: {
            text: '='
        },
        scope: {},
        controllerAs: 'logItem',
        template: '<div>{{ logItem.text }}</div>',
        controller: LogItemController
    };

    function LogItemController($scope, $element) {
        console.log('LogItemController');
    }
}

})();
