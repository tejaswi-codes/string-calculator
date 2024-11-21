import { CUSTOM_DELIMITER_INDICATOR, DEFAULT_DELIMITER, GLOBAL_DELIMITER } from "./data"


export const add = (numbers) => {
    // basic condition 1
    if (numbers === "") return 0


    // init
    let delimiter = DEFAULT_DELIMITER
    let numStr = numbers


    // re-assignment
    if (numbers.startsWith(CUSTOM_DELIMITER_INDICATOR)) {
        delimiter = numbers.charAt(CUSTOM_DELIMITER_INDICATOR.length)
        numStr = getNumStrForCustomDelimiter(numbers)
    }


    // splitting 
    const chunks = numStr.split(new RegExp(`${delimiter}|${GLOBAL_DELIMITER}`))


    // check for negative numbers
    const negatives = chunks.filter(num => Number(num) < 0)
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`)
    }


    // adding
    return chunks.reduce((sum, num) => sum + Number(num), 0)
}




// Helper function
const getNumStrForCustomDelimiter = (fullStr) => {
    const firstLineEndsAt = fullStr.indexOf(GLOBAL_DELIMITER)
    return fullStr.substring(firstLineEndsAt + 1)
}
