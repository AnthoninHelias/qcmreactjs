import {increment} from "./math";

test('test increment function', () => {
    expect (increment(1)).toBe(2)
    expect (increment(42)).toBe(43)
    expect (increment(-42)).toBe(-41)
});

describe ("math", () => {
    describe ("increment", () => {
        test('increment a positive number', () => {
            const result = increment(42);

            expect(result).toBe(43);
}); 

        test('increment a negative number', () => {
            const result = increment(-42);

            expect(result).toBe(-41);
});

    });

}); 

