import React from "react";
import { Link } from "react-router-dom";
import CardImg from "../../containers/CardImg/CardImg";
import CardInfo from "../../containers/CardInfo/CardInfo";
import styles from './ThinCard.styles'

const ThinCard = (props: {
    children?: any,
    color: string,
    name: string,
    price: string,
    url: string,
    key: number,
    path: string,
    id: string
}) => {

    return (
        <div className = {styles.container} style={{borderTop: `3px solid ${props.color}`}} >

            <Link to={`${props.path}${props.id}`}>
                {/* La idea es que el link tenga un pathing basado en una prop que se obtiene por cosas previas */}
                <CardImg url={props.url} style={'thin'} />
            </Link>

            <CardInfo nameOnly={true} name={props.name} price='' textSize={true} />
            <CardInfo nameOnly={false} name='' price={props.price} textSize={true} />
        </div>
    )
}

export default ThinCard;