// tslint:disable:no-expression-statement no-console
import test from 'ava';
import { Coords } from './coords';
import { snap, snapList } from './stgc';

test('snap 5 range 2 groups', t => {
  const coords: Coords = [[-1, 1], [2, 3], [10, 10], [11, 11]];
  t.deepEqual(snap(coords, 5), { '0,0': [0], '0,1': [1], '2,2': [2, 3] });
});

test('snapList 5 range 2 groups', t => {
  const coords: Coords = [[-1, 1], [2, 3], [10, 10], [11, 11]];
  t.deepEqual(snapList(coords, 5), [[0], [1], [2, 3]]);
});
