import { it, expect, describe } from 'vitest'
import { add } from '../utils/stringCalculator'


describe('string calculator', () => {

    it("should return 0 given an empty string", () => {
        expect(add("")).toBe(0)
    })

    it("should return the number itself given a single number", () => {
        expect(add("1")).toBe(1)
    })

    it("should return the sum of two numbers given in comma-separated format", () => {
        expect(add("1,5")).toBe(6)
    })

    it("should return the sum of any numbers given in comma-separated format", () => {
        expect(add("1,3,6,7")).toBe(17)
    })

    it("should handle new lines between numbers (instead of commas)", () => {
        expect(add("1\n2,3")).toBe(6)
    })

    it("should handle a custom defined delimiter", () => {
        expect(add("//;\n1;2")).toBe(3)
    })

    it("should throw an exception given the presence of a single negative number", () => {
        expect(() => add("1,-2")).toThrow(/^negative numbers not allowed -2$/)
    })

    it("should throw an exception given the presence of any negative numbers", () => {
        expect(() => add("1,-2\n3,-6,-1")).toThrow(/^negative numbers not allowed -2,-6,-1$/)
    })

    it("should allow decimal number addition", () => {
        expect(add("1.5,2.5")).toBe(4)
        expect(add("0.1,0.2")).toBeCloseTo(0.3, 5)
        expect(add("3.14,2.86")).toBe(6)
        expect(add("1.1\n1.9")).toBe(3)
    })
})