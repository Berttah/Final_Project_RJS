import React from "react";
import styles from './CardImg.styles'

const CardImg = (props: {
    children?: any,
    url: string,
    style: string
}) => {

    let currentStyle = props.style

    return (
        <div className = {currentStyle=='thin' ? styles.thin : styles.product} >
            <img className= {styles.image} src={props.url} alt='img' />
        </div>
    )
}

export default CardImg;