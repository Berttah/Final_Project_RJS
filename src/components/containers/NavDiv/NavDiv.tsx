import React from "react";
import styles from './NavDiv.styles'

const NavDiv = (props: {
    children?: any,
    style: string;
}) => {

    let currentStyle = props.style
    return (
        <div
            className = {currentStyle === 'left' ? styles.left : styles.right}
        >
            {props.children}
        </div>
    )
}

export default NavDiv;