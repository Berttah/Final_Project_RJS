import React from "react";
import styles from './FbIcon.styles';
import { AiOutlineFacebook } from 'react-icons/ai';

import { IconContext } from 'react-icons';


const FbIcon = (props: {
    style?: string;
}) => {

    return (
        <IconContext.Provider value={{className: 'icon', size:'24'}}>
            <div className= {styles.icon}>
                <AiOutlineFacebook />
            </div>
        </IconContext.Provider>
    )
}

export default FbIcon;