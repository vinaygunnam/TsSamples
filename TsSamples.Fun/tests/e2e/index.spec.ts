module Tests {
    describe("Index page", () => {
        // create an instance of the descriptor
        var indexDescriptor: IndexDescriptor = require("./IndexDescriptor.js");

        // open the page
        indexDescriptor.navigate();

        it("should have the right title", () => {
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
}