export const range = (a: number, b?: number): number[] =>
  [...Array(b ? b - 1 : a).keys()].map((x) => x + (b ? a : 0));

export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);
