![npm type definitions](https://img.shields.io/npm/types/snap-to-grid-clustering.svg)

# Snap to grid clustering

Clustering based on grid. Snaps coords to the nearest grid point determined by `gridSize`. Grid coords are rounded. Point `(1.2, 1)` is snapped to `(1, 1)`. Point `(1.6, 1)` is snapped to `(2, 1)` for `gridSize = 1`.

# Installation
```
npm install snap-to-grid-clustering
```

# Methods

## ```snap(coords: Coords, gridSize: number) { ... }```

Immutable. Returns snapped ids at cluster coords.

### Example (ts module)
```ts
import { snap } from 'snap-to-grid-clustering';
console.log(snap([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
// => { '0,0': [ 0 ], '0,1': [ 1 ], '2,2': [ 2, 3 ] }
```
### Example (es module)
```js
import { snap } from 'snap-to-grid-clustering'
console.log(snap([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
// => { '0,0': [ 0 ], '0,1': [ 1 ], '2,2': [ 2, 3 ] }
```
### Example (commonjs)
```js
var snap = require('snap-to-grid-clustering').snap;
console.log(snap([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
// => { '0,0': [ 0 ], '0,1': [ 1 ], '2,2': [ 2, 3 ] }
```

## ```snapList(coords: Coords, gridSize: number) { ... }```

Immutable. Returns snapped ids as list.

### Example (ts module)
```ts
import { snapList } from 'snap-to-grid-clustering';
console.log(snapList([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
// => [[0], [1], [2, 3]]
```
### Example (es module)
```js
import { snapList } from 'snap-to-grid-clustering'
console.log(snapList([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
// => [[0], [1], [2, 3]]
```
### Example (commonjs)
```js
var snapList = require('snap-to-grid-clustering').snapList;
console.log(snapList([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
// => [[0], [1], [2, 3]]
```

