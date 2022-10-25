import React from "react";
import ThinCard from "../../cards/ThinCard";
import Text32P from "../../text/left/32P/Text32P";
import styles from './LandingContainer.styles'

const LandingContainer = (props: {
    children?: any,
    color: string,
    cardColor: string,
    text: string,
}) => {

    return (
        <div className = {styles.container} style={{background: `linear-gradient(180deg, ${props.color} 0%, rgba(255, 246, 235, 0) 100%)`,}} >
            <Text32P text= {props.text} />
            <div className= {styles.cardArea}>
                <ThinCard color= {props.cardColor} />
                <ThinCard color= {props.cardColor} />
                <ThinCard color= {props.cardColor} />
                <ThinCard color= {props.cardColor} />
            </div>
        </div>
    )
}

export default LandingContainer;