import React from "react";
import styles from './CartIcon.styles';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { IconContext } from 'react-icons';


const CartIcon = (props: {
    style?: string;
}) => {

    return (
        <IconContext.Provider value={{className: 'icon', size:'24'}}>
            <div className= {styles.icon}>
                <AiOutlineShoppingCart />
            </div>
        </IconContext.Provider>
    )
}

export default CartIcon;