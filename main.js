const { catchError, map, of} = require("rxjs");
const clock$ = require("./emitter");

const subscription = clock$.pipe(
  map((x, index) => (x === 'tick' && index % 2 !== 0) ? 'tock' : x),
  catchError(err => of(err.message))
)
.subscribe({
  next: x => console.log(x),
  error: (err) => console.log(err),
  complete: () => console.log('Observer got a complete notification')
});

module.exports = subscription;
