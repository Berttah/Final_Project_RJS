import React from "react";
import styles from './NavDivAreas.styles'

const NavDivAreas = (props: {
    children?: any,
    style: string;
}) => {

    let currentStyle = props.style
    return (
        <div
            className = {currentStyle === 'msgArea' ? styles.msgArea : styles.buttonArea}
        >
            {props.children}
        </div>
    )
}

export default NavDivAreas;