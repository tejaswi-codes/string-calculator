import { it, expect, describe } from 'vitest'
import { add } from '../utils/stringCalculator'


describe('string calculator', () => {
    it("should return 0 given an empty string", () => {
        expect(add("")).toBe(0)
    })
})