import React from "react";
import CardImg from "../../containers/CardImg/CardImg";
import CardInfo from "../../containers/CardInfo/CardInfo";
import styles from './ThinCard.styles'

const ThinCard = (props: {
    children?: any,
    color: string,
}) => {

    return (
        <div className = {styles.container} style={{borderTop: `3px solid ${props.color}`}} >
            <CardImg text="Image" />
            <CardInfo nameOnly={true} name='Product Name' price='' />
            <CardInfo nameOnly={false} name='' price='$ *****.**' />
        </div>
    )
}

export default ThinCard;