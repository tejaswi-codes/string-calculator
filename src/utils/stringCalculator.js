import { DEFAULT_DELIMITER, GLOBAL_DELIMITER } from "./data"


export const add = (numbers) => {
    if (numbers === "") return 0
    if (numbers.indexOf(DEFAULT_DELIMITER) === -1) return parseInt(numbers)

    const chunks = numbers.split(new RegExp(`${DEFAULT_DELIMITER}|${GLOBAL_DELIMITER}`))
    return chunks.reduce((sum, num) => sum + parseInt(num), 0)
}