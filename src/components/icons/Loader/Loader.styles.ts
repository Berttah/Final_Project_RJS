import { style, keyframes } from 'typestyle';

// const loaderAnimation = keyframes({
//     animationDuration: '1s',
//     animationInteractionCount: 'infinite',

//     '0%': { transform: 'rotate(0deg)' },
//     '100%': { transform: 'rotate(360deg)' }
//     // spin {
//     // }
// })

const styles = {
    a: style({
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        // animation: 'spin 2s linear infinite',
        // animationName: loaderAnimation
    })
}

export default styles;