import { Coord, Coords, SnappedCoords, SnappedCoordsIndexes } from './coords';

/**
 * Create an array of point ids that snap to a given grid size
 *
 * ### Example (es module)
 * ```js
 * import { snap } from 'snap-to-grid-clustering'
 * console.log(snapIndexes([[1,2],[3,4],[10,20]], 5))
 * // => [[0,1],[2]]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var snap = require('snap-to-grid-clustering').snap;
 * console.log(snapIndexes([[1,2],[3,4],[10,20]], 5))
 * // => [[0,1],[2]]
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
