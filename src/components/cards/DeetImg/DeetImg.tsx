import React from "react";
import styles from './DeetImg.styles'

const DeetImg = (props: {
    children?: any,
    url: string,
    color: string
}) => {

    return (
        <div className = {styles.deet} style={{borderTop: `3px solid ${props.color}`}}>
            <img className= {styles.image} src={props.url} alt='img' />
        </div>
    )
}

export default DeetImg;