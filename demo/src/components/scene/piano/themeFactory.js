
const OFFSET_TOP = -100
export const themeFactory = (position) => {
    return {
        base: {
            top: position.y + OFFSET_TOP,
            increment: -40,
        },
        container: {
            right: 'auto',
            left: position.x,
            perspective: '800px',
            perspectiveOrigin: '50% 50%',
            transformStyle: 'preserve-3d'
        },
        containerTransitions: {
            opening: {
                opacity: 1,
                visibility: 'visible',
                transform: `translateZ(-100px) translate(0, 0)`,
            },
            closing: {
                opacity: 0,
                visibility: 'hidden',
                transform: `translateZ(-100px) translate(0, -80px)`,
            }
        }
    }
}

export default themeFactory