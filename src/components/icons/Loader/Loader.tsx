import React from "react";
import styles from './Loader.styles';
import { style, keyframes } from 'typestyle';


const UserIcon = (props: {
    style?: string,
    color: string,
}) => {

    const loaderAnimation = keyframes({
        animationDuration: '1s',
        animationInteractionCount: 'infinite',
    
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
        // spin {
        // }
    })
    
    const styles = {
        loader: style({
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            // animation: 'spin 2s linear infinite',
            animationName: loaderAnimation
        })
    }

    return (
        <div className={styles.loader} style={{border: `16px solid ${props.color}`,}}></div>
    )
}

export default UserIcon;