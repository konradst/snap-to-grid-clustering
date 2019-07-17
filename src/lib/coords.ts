// [0.12, 34.68]
export type Coord = ReadonlyArray<number>;

// [ [0.12, 34.68], [50,51], [0.15, 34.69] ]
export type Coords = ReadonlyArray<Coord>;

// { '0,34': [0, 2], '50,50': [1] }
export interface SnappedCoords {
  readonly [key: string]: ReadonlyArray<number>;
}

// [ [0,2], [1] ]
export type SnappedCoordsList = ReadonlyArray<ReadonlyArray<number>>;
