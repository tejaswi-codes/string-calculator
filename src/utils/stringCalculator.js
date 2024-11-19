export const add = (numbers) => {
    if (numbers === "") return 0
    if (numbers.indexOf(",") === -1) return parseInt(numbers)

    let chunks = numbers.split(",")    
    return chunks.reduce((sum, num) => sum + parseInt(num), 0)
}