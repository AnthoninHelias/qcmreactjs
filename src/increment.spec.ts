import {increment} from "./increment";

test('test increment function', () => {
    expect (increment(1)).toBe(2)
    expect (increment(42)).toBe(43)
    expect (increment(-42)).toBe(-41)
});
