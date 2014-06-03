module Utils {
    "use strict";

    export class RandomNumbers {
        public static GetRandom(max: number, min?: number, except?: Array<number>): number {
            min = min || 0;

            if (min > max) {
                throw new Error("RandomNumbers: MIN cannot be greater than MAX");
            }

            if (except && except.length) {
                var random: number;
                do {
                    random = this.generateRandom(min, max);
                } while (except.indexOf(random) >= 0);
                return random;
            } else {
                return this.generateRandom(min, max);
            }
        }

        public static GetRandomWithin<T>(list: Array<T>): T {
            if (list && list.length) {
                var random: number = this.generateRandom(0, list.length);
                
                return list[random];
            }

            throw new Error("RandomNumbers: List is empty");
        }

        private static generateRandom(lower: number, upper: number): number {
            return lower + Math.floor(Math.random() * (upper - lower));
        }
    }
}