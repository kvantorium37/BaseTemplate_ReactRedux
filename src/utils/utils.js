export const _hardCopy = (obj) => JSON.parse(JSON.stringify(obj))


export const _pasteBetween = (arr = [], index, value) => {
    const firstPart = arr.slice(0, index)
    const secondPart = arr.slice(index)
    console.log(firstPart, secondPart);
    // return [...firstPart, value, ...secondPart]
}