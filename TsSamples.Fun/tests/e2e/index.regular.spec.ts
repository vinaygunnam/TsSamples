module Tests {
    describe("INDEX page", function () {
    
        it("should have the correct title", function () {
            browser.get("/#");
            expect(browser.getTitle()).toBe("TypeScript Samples");
        });

        it("should have a link GAME", function () {
            element(by.css("ul.nav li")).click();
            expect(browser.getCurrentUrl()).toMatch(/match-and-reveal/);
        });

        describe("GAME view", function () {
            it("should have a reset button", function () {
                var btn = element(by.buttonText("Reset the game"));
            
                expect(btn.isPresent()).toBe(true);
            });

            it("should have six slots", function () {
                element.all(by.css(".card-container .card")).then(function (slots) {
                    expect(slots.length).toBe(6);
                });

                // all slots must be "closed" initially
                element.all(by.css(".card-container .card.flipped")).then(function (slots) {
                    expect(slots.length).toBe(0);
                });
            });

            it("should open a slot when clicked", function () {
                element.all(by.css(".card-container .card")).first().click();

                element.all(by.css(".card-container .card.flipped")).then(function (slots) {
                    expect(slots.length).toBe(1);
                });
            });

            it("should open at most 2 slots at a time", function () {
                element.all(by.css(".card-container .card")).then(function (slots) {
                    slots[0].click();
                    slots[1].click();
                    slots[2].click();

                    element.all(by.css(".card-container .card.flipped")).then(function (slots) {
                        expect(slots.length).toBe(2);
                    });

                    // after 2 seconds, all slots must close
                    browser.sleep(2000);

                    element.all(by.css(".card-container .card.flipped")).then(function (slots) {
                        expect(slots.length).toBe(0);
                    });
                });
            });
        });
    });
}