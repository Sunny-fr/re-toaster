export const getPosition = (elm) => {
    // const bounds = elm.getBoundingClientRect()
    // const x = bounds.left
    // const y = bounds.top
    // return {
    //     x, y
    // }

    const x = elm.offsetLeft
    const y = elm.parentElement.offsetTop
    return {
        x, y
    }
}

//optional
export const myCustomTheme = {
    delay: 32500,
    animationDelay: 400,
    container: {
        transition: `transform 400ms ease-out, visibility 400ms ease-out, opacity 400ms ease-out, top 400ms ease-out`
    },
    containerColors: {
        customToast: {
            backgroundColor: '#b35f9e',
            right: 100
        },
    }
}