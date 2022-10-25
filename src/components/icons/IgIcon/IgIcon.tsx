import React from "react";
import styles from './IgIcon.styles';
import { AiOutlineInstagram } from 'react-icons/ai';

import { IconContext } from 'react-icons';


const IgIcon = (props: {
    style?: string;
}) => {

    return (
        <IconContext.Provider value={{className: 'icon', size:'24'}}>
            <div className= {styles.icon}>
                <AiOutlineInstagram />
            </div>
        </IconContext.Provider>
    )
}

export default IgIcon;