const DitherMethods = {
  None: { uniqueId: 0, name: "None", localeKey: "SETTINGS-DITHER-NONE" },
  FloydSteinberg: {
    uniqueId: 1,
    name: "Floyd-Steinberg",
    ditherMatrix: [
      [0, 0, 0, 7.0, 0],
      [0, 3.0, 5.0, 1.0, 0],
      [0, 0, 0, 0, 0],
    ],
    ditherDivisor: 16.0,
  },
  Bayer44: {
    uniqueId: 2,
    name: "Bayer (4x4)",
    ditherMatrix: [
      [1, 9, 3, 11],
      [13, 5, 15, 7],
      [4, 12, 2, 10],
      [16, 8, 14, 6],
    ],
  },
  Bayer22: {
    uniqueId: 3,
    name: "Bayer (2x2)",
    ditherMatrix: [
      [1, 3],
      [4, 2],
    ],
  },
  Ordered33: {
    uniqueId: 4,
    name: "Ordered (3x3)",
    ditherMatrix: [
      [1, 7, 4],
      [5, 8, 3],
      [6, 2, 9],
    ],
  },
  MinAvgErr: {
    uniqueId: 5,
    name: "MinAvgErr",
    ditherMatrix: [
      [0, 0, 0, 7.0, 5.0],
      [3.0, 5.0, 7.0, 5.0, 3.0],
      [1.0, 3.0, 5.0, 3.0, 1.0],
    ],
    ditherDivisor: 48.0,
  },
  Burkes: {
    uniqueId: 6,
    name: "Burkes",
    ditherMatrix: [
      [0.0, 0.0, 0.0, 8.0, 4.0],
      [2.0, 4.0, 8.0, 4.0, 2.0],
      [0.0, 0.0, 0.0, 0.0, 0.0],
    ],
    ditherDivisor: 32.0,
  },
  SierraLite: {
    uniqueId: 7,
    name: "Sierra-Lite",
    ditherMatrix: [
      [0, 0, 0, 2.0, 0],
      [0, 1.0, 1.0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    ditherDivisor: 4.0,
  },
  Stucki: {
    uniqueId: 8,
    name: "Stucki",
    ditherMatrix: [
      [0, 0, 0, 8.0, 4.0],
      [2.0, 4.0, 8.0, 4.0, 2.0],
      [1.0, 2.0, 4.0, 2.0, 1.0],
    ],
    ditherDivisor: 42.0,
  },
  Atkinson: {
    uniqueId: 9,
    name: "Atkinson",
    ditherMatrix: [
      [0, 0, 0, 1.0, 1.0],
      [0, 1.0, 1.0, 1.0, 0],
      [0, 0, 1.0, 0, 0],
    ],
    ditherDivisor: 8.0,
  },
};

export default DitherMethods;
