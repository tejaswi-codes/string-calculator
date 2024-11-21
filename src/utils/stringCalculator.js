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


    // check for negative numbers and non-numeric values
    const [negatives, nonNumbers] = getOutliers(chunks)


    // exception-handling
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`)
    } else if (nonNumbers.length > 0) {
        throw new Error(`non-numeric values not allowed ${nonNumbers.join(",")}`)
    }


    // adding
    return chunks.reduce((sum, num) => sum + Number(num), 0)
}




// Helper function
const getNumStrForCustomDelimiter = (fullStr) => {
    const firstLineEndsAt = fullStr.indexOf(GLOBAL_DELIMITER)
    return fullStr.substring(firstLineEndsAt + 1)
}

// Helper function
const getOutliers = (strArray) => {
    const negatives = []
    const nonNumbers = []

    strArray.forEach(str => {
        const num = Number(str)
        if (isNaN(num)) {
            nonNumbers.push(str)
        } else if (num < 0) {
            negatives.push(str)
        }
    })

    return [negatives, nonNumbers]
}
