import React from "react";
import styles from './NavButton.styles'
import Text20P from "../../text/left/20P/Text20P";

const NavButton = (props: {
    text: string;
}) => {

    return (
        <div className = {styles.button}>
            <Text20P text={props.text} />
        </div>
    )
}

export default NavButton;