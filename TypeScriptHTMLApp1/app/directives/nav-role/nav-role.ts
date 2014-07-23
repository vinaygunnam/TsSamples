module App {
    class NavRoleDirective {
        constructor() {
            var directive: ng.IDirective = {
                restrict: "A",
                link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
                    // hide the sub menu
                    var subMenu = element.find(".sub-menu").first();
                    subMenu.hide();

                    // attach click handler
                    element.on("click", (evt: JQueryEventObject) => {
                        subMenu.slideToggle();
                        evt.stopPropagation();
                    });
                }
            };

            return directive;
        }
    }

    container.directive("navRole", NavRoleDirective);
} 