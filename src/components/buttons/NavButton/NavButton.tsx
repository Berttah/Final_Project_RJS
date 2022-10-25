import React from "react";
import styles from './NavButton.styles'
import Text20P from "../../text/left/20P/Text20P";

import { useState } from 'react';

const NavButton = (props: {
    text: string,
    color: string
}) => {

    const [isHovering, setIsHovering] = useState(false);
    const handeMouseEnter =()=> {
        setIsHovering(true);
    };
    const handeMouseLeave =()=> {
        setIsHovering(false);
    }

    return (
        <div className = {styles.button} 
            style={{
                background: isHovering ? `linear-gradient(0deg, ${props.color} 0%, rgba(255, 246, 235, 0) 10%)` : ''
            }}
            onMouseEnter={handeMouseEnter}
            onMouseLeave={handeMouseLeave}
        >
            <Text20P text={props.text} />
        </div>
    )
}

export default NavButton;