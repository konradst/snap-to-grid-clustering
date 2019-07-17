import { Coord, Coords, SnappedCoords, SnappedCoordsIndexes } from './coords';

/**
 * Create an array of point ids that snap to a given grid size
 *
 *  ### Example (ts module)
 * ```ts
 * import { snapIndexes } from 'snap-to-grid-clustering';
 * snapIndexes([[-1, 1], [2, 3], [10, 10], [11, 11]], 5)
 * // => [[0], [1], [2, 3]]
 * ```
 * 
 * ### Example (es module)
 * ```js
 * import { snapIndexes } from 'snap-to-grid-clustering'
 * console.log(snapIndexes([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
 * // => [[0], [1], [2, 3]]
 * ```
 * 
 * ### Example (commonjs)
 * ```js
 * var snapIndexes = require('snap-to-grid-clustering').snapIndexes;
 * console.log(snapIndexes([[-1, 1], [2, 3], [10, 10], [11, 11]], 5))
 * // => [[0], [1], [2, 3]]
 * ```
 */
export function snapIndexes(
  coords: Coords,
  gridSize: number
): SnappedCoordsIndexes {
  const snappedCoords: SnappedCoords = coords.reduce(
    (snappedCoordsPart: SnappedCoords, coord: Coord, coordIndex: number) => {
      const key: string = coord.reduce((keyPart, axle) => {
        return `${keyPart}:${Math.round(+axle / gridSize)}:`;
      }, '');
      return {
        ...snappedCoordsPart,
        [key]: snappedCoordsPart[key]
          ? [...snappedCoordsPart[key], coordIndex]
          : [coordIndex]
      };
    },
    {}
  );
  return Object.values(snappedCoords);
}
