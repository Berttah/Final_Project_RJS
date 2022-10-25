import React from "react";
import styles from './Footer.styles'

import Text16P_W from "../../text/left/16P_W/Text16P_W";
import IgIcon from "../../icons/IgIcon";
import FbIcon from "../../icons/FbIcon";


const Footer = (props: {}) => {

    return (
        <div className= {styles.container}>
            <div style={{display:'flex',justifyContent:'center',gap:'50px',width:'600px'}}>
                <Text16P_W text="Phone: +54 221 ***-****" />
                <Text16P_W text="Office Hours: 8:00 to 17:30hs" />
            </div>
            <img className= {styles.logo} src="src\assets\Logo.png" alt="" />
            <div style={{display:'flex',justifyContent:'center',gap:'50px',width:'600px'}}>
                <IgIcon />
                <FbIcon />
            </div>
        </div>
    )
}

export default Footer;