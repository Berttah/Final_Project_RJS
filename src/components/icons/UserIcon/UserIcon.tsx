import React from "react";
import styles from './UserIcon.styles';
import { AiOutlineUser } from 'react-icons/ai';

import { IconContext } from 'react-icons';


const UserIcon = (props: {
    style?: string;
}) => {

    return (
        <IconContext.Provider value={{className: 'icon', size:'24'}}>
            <div className= {styles.icon}>
                <AiOutlineUser />
            </div>
        </IconContext.Provider>
    )
}

export default UserIcon;