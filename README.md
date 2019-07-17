![npm type definitions](https://img.shields.io/npm/types/snap-to-grid-clustering.svg)

# snap-to-grid-clustering

Snap to grid clustering

Create an array of point ids that snap to a given grid size.

## Installation & usage

```
npm install snap-to-grid-clustering
```

### Example (es module)
```js
import { snap } from 'snap-to-grid-clustering'
console.log(snapIndexes([[1,2],[3,4],[10,20]], 5))
// => [[0,1],[2]]
```
### Example (commonjs)
```js
var snap = require('snap-to-grid-clustering').snap;
console.log(snapIndexes([[1,2],[3,4],[10,20]], 5))
// => [[0,1],[2]]
```
