export const getPosition = (elm) => {
    const bounds = elm.getBoundingClientRect()
    const x = bounds.left
    const y = bounds.top
    return {
        x, y
    }
}