![npm type definitions](https://img.shields.io/npm/types/snap-to-grid-clustering.svg)

# snap-to-grid-clustering

Snap to grid clustering

Create an array of point ids that snap to a given grid size.

## Installation & usage

Installation:
```
npm install snap-to-grid-clustering
```

Usage:
```
snapIndexes(coords: Coords, gridSize: number)
```

### Example (ts module)
```ts
import { snapIndexes } from 'snap-to-grid-clustering';
snapIndexes([[-1, 1], [2, 3], [10, 10], [11, 11]], 5)
// => [[0], [1], [2, 3]]
```

### Example (es module)
```js
import { snapIndexes } from 'snap-to-grid-clustering'
console.log(snapIndexes([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
// => [[0], [1], [2, 3]]
```

### Example (commonjs)
```js
var snapIndexes = require('snap-to-grid-clustering').snapIndexes;
console.log(snapIndexes([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
// => [[0], [1], [2, 3]]
```
