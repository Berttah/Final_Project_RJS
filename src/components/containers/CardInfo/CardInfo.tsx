import React from "react";
import CartIcon from "../../icons/CartIcon";
import Text16P_C from "../../text/center/16P_C/Text16P_C";
import Text14P_C from "../../text/center/14P_C/Text14P_C";
import styles from './CardInfo.styles'
import Text20P_C from "../../text/center/20P_C/Text20P_C";

const CardInfo = (props: {
    nameOnly: boolean,
    name: string,
    price: string,
    textSize: boolean
}) => {

    return (
        <div className = {styles.container}>
            {props.nameOnly ? 
            <Text14P_C text={props.name} /> : 
            <div style={{display:'flex',justifyContent:'space-between',width:'85%'}}>
                <Text16P_C text= {`$ ${props.price}`} />
                <CartIcon />
            </div>
            }
        </div>
    )
}

export default CardInfo;