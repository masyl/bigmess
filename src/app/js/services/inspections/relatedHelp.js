yarn.service("relatedHelpInspection", function relatedHelpInspection(InspectionArticle) {
    return {
        inspect: inspect
    };

    function inspect(token, yeld) {
        if (token && token.helpArticles && token.helpArticles.length > 0) {
            var scope = {};
            scope.helpArticles = token.helpArticles;
            yeld(new InspectionArticle("Related Help Articles", "help", "related-help-inspection", scope))
        }
    }

});

yarn.directive('relatedHelpInspection', function relatedHelpInspection() {
    return {
        replace: true,
        templateUrl: "./html/inspections/relatedHelp.html",
        controller: function ($scope) {}
    };
});