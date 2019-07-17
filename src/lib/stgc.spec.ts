// tslint:disable:no-expression-statement
import test from 'ava';
import { Coords } from './coords';
import { snapIndexes } from './stgc';

test('snap 5 range 2 groups', t => {
  const coords: Coords = [[-1, 1], [2, 3], [10, 10], [11, 11]];
  t.deepEqual(snapIndexes(coords, 5), [[0], [1], [2, 3]]);
});
