var Tests;
(function (Tests) {
    describe("Index page", function () {
        // create an instance of the descriptor
        var indexDescriptor = require("./IndexDescriptor.js");

        // open the page
        indexDescriptor.navigate();

        it("should have the right title", function () {
            expect(browser.getTitle()).toBe("TypeScript Samples");
        });

        it("should have a link GAME", function () {
            indexDescriptor.gameLink.click();
            expect(browser.getCurrentUrl()).toMatch(/match-and-reveal/);
        });

        it("should have a reset button", function () {
            var btn = indexDescriptor.getResetButton();

            expect(btn.isPresent()).toBe(true);
        });
    });
})(Tests || (Tests = {}));
//# sourceMappingURL=index.spec.js.map
