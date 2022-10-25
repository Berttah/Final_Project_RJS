import React from "react";
import Text20P from "../../text/left/20P/Text20P";
import styles from './CardImg.styles'

const CardImg = (props: {
    children?: any,
    text: string,
}) => {

    return (
        <div className = {styles.container} >
            <Text20P text={props.text} />
            {/* later it would be an img component */}
        </div>
    )
}

export default CardImg;