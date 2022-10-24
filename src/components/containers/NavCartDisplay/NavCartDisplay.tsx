import React from "react";
import styles from './NavCartDisplay.styles'
import CartIcon from "../../icons/CartIcon";
import Text20P from "../../text/left/20P/Text20P";

const NavCartDisplay = (props: {
    text: string;
}) => {

    return (
        <div className = {styles.button}>
            <CartIcon />
            <Text20P text={props.text} />
        </div>
    )
}

export default NavCartDisplay;