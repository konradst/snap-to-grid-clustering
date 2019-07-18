![npm type definitions](https://img.shields.io/npm/types/snap-to-grid-clustering.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/konradst/snap-to-grid-clustering.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/konradst/snap-to-grid-clustering.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/snap-to-grid-clustering.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/snap-to-grid-clustering.svg)
![npm](https://img.shields.io/npm/v/snap-to-grid-clustering.svg)
![typescript-starter](https://img.shields.io/badge/boilerplate-typescript--starter-blue.svg)
![CircleCI](https://img.shields.io/circleci/build/github/konradst/snap-to-grid-clustering.svg)
![GitHub issues](https://img.shields.io/github/issues/konradst/snap-to-grid-clustering.svg)
![GitHub pull requests](https://img.shields.io/github/issues-pr/konradst/snap-to-grid-clustering.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/konradst/snap-to-grid-clustering.svg)
![GitHub](https://img.shields.io/github/license/konradst/snap-to-grid-clustering.svg)

[![CircleCI](https://circleci.com/gh/konradst/snap-to-grid-clustering.svg?style=svg)](https://circleci.com/gh/konradst/snap-to-grid-clustering)

![GitHub followers](https://img.shields.io/github/followers/konradst.svg?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/konradst1.svg?style=social)

# Snap to Grid Clustering

Clustering based on grid. Snaps coords to the nearest grid point determined by `gridSize`. Grid coords are rounded. Point `(1.2, 1)` is snapped to `(1, 1)`. Point `(1.6, 1)` is snapped to `(2, 1)` for `gridSize = 1`.

# Installation
```
npm install snap-to-grid-clustering
```

# Methods

## ```snap(coords: Coords, gridSize: number) { ... }```

Immutable. Returns snapped ids hashmap at cluster coords.

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
