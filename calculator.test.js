const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator', () => {
    describe('add', () => {
        test('should add two positive numbers correctly', () => {
            expect(add(2, 3)).toBe(5);
            expect(add(10, 15)).toBe(25);
            expect(add(0, 5)).toBe(5);
        });

        test('should add negative numbers correctly', () => {
            expect(add(-2, -3)).toBe(-5);
            expect(add(-10, 5)).toBe(-5);
            expect(add(5, -3)).toBe(2);
        });

        test('should add decimal numbers correctly', () => {
            expect(add(2.5, 3.7)).toBeCloseTo(6.2);
            expect(add(0.1, 0.2)).toBeCloseTo(0.3);
        });

        test('should add zero correctly', () => {
            expect(add(0, 0)).toBe(0);
            expect(add(5, 0)).toBe(5);
            expect(add(0, 5)).toBe(5);
        });
    });

    describe('subtract', () => {
        test('should subtract two positive numbers correctly', () => {
            expect(subtract(5, 3)).toBe(2);
            expect(subtract(10, 4)).toBe(6);
            expect(subtract(7, 7)).toBe(0);
        });

        test('should subtract negative numbers correctly', () => {
            expect(subtract(-2, -3)).toBe(1);
            expect(subtract(-10, 5)).toBe(-15);
            expect(subtract(5, -3)).toBe(8);
        });

        test('should subtract decimal numbers correctly', () => {
            expect(subtract(5.5, 2.3)).toBeCloseTo(3.2);
            expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
        });

        test('should subtract zero correctly', () => {
            expect(subtract(5, 0)).toBe(5);
            expect(subtract(0, 5)).toBe(-5);
            expect(subtract(0, 0)).toBe(0);
        });
    });

    describe('multiply', () => {
        test('should multiply two positive numbers correctly', () => {
            expect(multiply(2, 3)).toBe(6);
            expect(multiply(4, 5)).toBe(20);
            expect(multiply(7, 1)).toBe(7);
        });

        test('should multiply negative numbers correctly', () => {
            expect(multiply(-2, -3)).toBe(6);
            expect(multiply(-2, 3)).toBe(-6);
            expect(multiply(2, -3)).toBe(-6);
        });

        test('should multiply decimal numbers correctly', () => {
            expect(multiply(2.5, 4)).toBe(10);
            expect(multiply(0.5, 0.5)).toBeCloseTo(0.25);
        });

        test('should multiply by zero correctly', () => {
            expect(multiply(5, 0)).toBe(0);
            expect(multiply(0, 5)).toBe(0);
            expect(multiply(0, 0)).toBe(0);
        });
    });

    describe('divide', () => {
        test('should divide two positive numbers correctly', () => {
            expect(divide(6, 2)).toBe(3);
            expect(divide(15, 3)).toBe(5);
            expect(divide(7, 1)).toBe(7);
        });

        test('should divide negative numbers correctly', () => {
            expect(divide(-6, -2)).toBe(3);
            expect(divide(-6, 2)).toBe(-3);
            expect(divide(6, -2)).toBe(-3);
        });

        test('should divide decimal numbers correctly', () => {
            expect(divide(7.5, 2.5)).toBe(3);
            expect(divide(0.6, 0.2)).toBeCloseTo(3);
        });

        test('should divide by one correctly', () => {
            expect(divide(5, 1)).toBe(5);
            expect(divide(-5, 1)).toBe(-5);
        });

        test('should throw error when dividing by zero', () => {
            expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
            expect(() => divide(-5, 0)).toThrow('Cannot divide by zero');
            expect(() => divide(0, 0)).toThrow('Cannot divide by zero');
        });

        test('should handle division resulting in decimal', () => {
            expect(divide(5, 2)).toBe(2.5);
            expect(divide(1, 3)).toBeCloseTo(0.333333);
        });
    });
});
