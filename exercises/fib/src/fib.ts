/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
export function* getFibSequence(): IterableIterator<number> {
  let lastLast = 1;
  let last = 0;
  while (true) {
    let sum = lastLast + last;
    lastLast = last;
    yield sum;
    last = sum;
  }
}
