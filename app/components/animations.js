const scaleViewAnimation = {
    hide: { opacity: 0, scale: 0 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
}

const zoomOutAnimation = {
    hide: { opacity: 0, scale: 3 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
}

const slideFromLeft = {
    hide: { opacity: 0, x: -300 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}

const slideFromRight = {
    hide: { opacity: 0, x: 300 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}
export { scaleViewAnimation, slideFromLeft, zoomOutAnimation, slideFromRight }