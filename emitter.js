const { interval, map, take, merge, first} = require("rxjs");

const customErrorObservable = interval(5500).pipe(
    first(),
    map(x => {throw new Error("Explosion!")})
);

const everySecondObservable = interval(1000).pipe(
    take(7),
    map(x => 'tick')
);

const result = merge(everySecondObservable, customErrorObservable);

module.exports = result;
