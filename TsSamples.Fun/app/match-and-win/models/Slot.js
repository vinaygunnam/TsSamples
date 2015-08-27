var MatchAndWin;
(function (MatchAndWin) {
    "use strict";

    MatchAndWin.animationInProgress = false;

    var Slot = (function () {
        function Slot(team) {
            this.team = team;
            this.flipped = false;
            this.revealed = false;
        }
        Slot.prototype.setDomElement = function (element) {
            this.domElement = element;
        };

        Slot.prototype.open = function () {
            this.flipped = true;
            this.domElement.addClass("flipped");
        };

        Slot.prototype.close = function () {
            var _this = this;
            // a slot can be closed ONLY if it is NOT REVEALED already
            if (this.revealed === false) {
                MatchAndWin.animationInProgress = true;
                window.setTimeout(function () {
                    _this.flipped = false;
                    _this.domElement.removeClass("flipped");
                    MatchAndWin.animationInProgress = false;
                }, 2000);
            }
        };
        return Slot;
    })();
    MatchAndWin.Slot = Slot;
})(MatchAndWin || (MatchAndWin = {}));
//# sourceMappingURL=Slot.js.map
