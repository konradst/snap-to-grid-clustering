import { Coord, Coords, SnappedCoords, SnappedCoordsList } from './coords';

/**
 * Returns snapped ids at cluster coords.
 *
 * ### Example (ts module)
 * ```ts
 * import { snap } from 'snap-to-grid-clustering';
 * snap([[-1, 1], [2, 3], [10, 10], [11, 11]], 5)
 * // => { '0,0': [ 0 ], '0,1': [ 1 ], '2,2': [ 2, 3 ] }
 * ```
 *
 * ### Example (es module)
 * ```js
 * import { snap } from 'snap-to-grid-clustering'
 * console.log(snap([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
 * // => { '0,0': [ 0 ], '0,1': [ 1 ], '2,2': [ 2, 3 ] }
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var snap = require('snap-to-grid-clustering').snap;
 * console.log(snap([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
 * // => { '0,0': [ 0 ], '0,1': [ 1 ], '2,2': [ 2, 3 ] }
 * ```
 */
export function snap(coords: Coords, gridSize: number): SnappedCoords {
  return coords.reduce(
    (snappedCoordsPart: SnappedCoords, coord: Coord, coordIndex: number) => {
      const key: string = coord
        .reduce((keyPart, axle) => {
          return `${keyPart},${Math.round(+axle / gridSize)}`;
        }, '')
        .substr(1);
      return {
        ...snappedCoordsPart,
        [key]: snappedCoordsPart[key]
          ? [...snappedCoordsPart[key], coordIndex]
          : [coordIndex]
      };
    },
    {}
  );
}

/**
 * Returns snapped ids as list.
 *
 * ### Example (ts module)
 * ```ts
 * import { snapList } from 'snap-to-grid-clustering';
 * snapList([[-1, 1], [2, 3], [10, 10], [11, 11]], 5)
 * // => [[0], [1], [2, 3]]
 * ```
 *
 * ### Example (es module)
 * ```js
 * import { snapList } from 'snap-to-grid-clustering'
 * console.log(snapList([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
 * // => [[0], [1], [2, 3]]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var snapList = require('snap-to-grid-clustering').snapList;
 * console.log(snapList([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
 * // => [[0], [1], [2, 3]]
 * ```
 */
export function snapList(coords: Coords, gridSize: number): SnappedCoordsList {
  return Object.values(snap(coords, gridSize));
}
