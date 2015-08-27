var Utils;
(function (Utils) {
    "use strict";

    var RandomNumbers = (function () {
        function RandomNumbers() {
        }
        RandomNumbers.GetRandom = function (max, min, except) {
            min = min || 0;

            if (min > max) {
                throw new Error("RandomNumbers: MIN cannot be greater than MAX");
            }

            if (except && except.length) {
                var random;
                do {
                    random = this.generateRandom(min, max);
                } while(except.indexOf(random) >= 0);
                return random;
            } else {
                return this.generateRandom(min, max);
            }
        };

        RandomNumbers.GetRandomWithin = function (list) {
            if (list && list.length) {
                var random = this.generateRandom(0, list.length);

                return list[random];
            }

            throw new Error("RandomNumbers: List is empty");
        };

        RandomNumbers.generateRandom = function (lower, upper) {
            return lower + Math.floor(Math.random() * (upper - lower));
        };
        return RandomNumbers;
    })();
    Utils.RandomNumbers = RandomNumbers;
})(Utils || (Utils = {}));
//# sourceMappingURL=Utils.js.map
