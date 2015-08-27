var Tests;
(function (Tests) {
    var IndexDescriptor = (function () {
        function IndexDescriptor() {
            this.gameLink = element(by.css("ul.nav li"));
        }
        IndexDescriptor.prototype.navigate = function () {
            browser.get("/");
        };

        IndexDescriptor.prototype.getResetButton = function () {
            return element(by.buttonText("Reset the game"));
        };
        return IndexDescriptor;
    })();
    Tests.IndexDescriptor = IndexDescriptor;

    module.exports = new IndexDescriptor();
})(Tests || (Tests = {}));
//# sourceMappingURL=IndexDescriptor.js.map
