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

})