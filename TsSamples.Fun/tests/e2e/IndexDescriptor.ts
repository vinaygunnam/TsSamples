module Tests {
    declare var module;
    export class IndexDescriptor {
        public gameLink: protractor.ElementFinder;

        constructor() {
            this.gameLink = element(by.css("ul.nav li"));
        }

        navigate(): void {
            browser.get("/");
        }

        getResetButton() {
            return element(by.buttonText("Reset the game"));
        }
    }

    module.exports = new IndexDescriptor();
}