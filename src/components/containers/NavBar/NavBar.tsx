import React from "react";
import styles from './NavBar.styles'

import NavDiv from '../NavDiv/NavDiv'
import NavDivAreas from "../NavDivAreas/NavDivAreas";
import UserIcon from "../../icons/UserIcon/UserIcon";
import CartIcon from "../../icons/CartIcon";

import Text20P from "../../text/left/20P/Text20P";
import NavButton from "../../buttons/NavButton/NavButton";
import NavCartDisplay from "../NavCartDisplay";

const NavBar = (props: {}) => {

    return (
        <div className= {styles.container}>
            <NavDiv style="left">
                <img className= {styles.logo} src="src\assets\Logo.png" alt="" />
            </NavDiv>
            <div style={{display:'flex'}}>
                <NavButton text="Spring"/>
                <NavButton text="Summer"/>
                <NavButton text="Autum"/>
                <NavButton text="Winter"/>
            </div>
            <NavDiv style="rigth">
                <NavDivAreas style="msgArea">
                    <Text20P text="Welcome to Bequin Seasonal Clothing" />
                </NavDivAreas>
                <NavDivAreas style="buttonArea">
                    <UserIcon />
                    <NavCartDisplay text="1" />
                </NavDivAreas>
            </NavDiv>
        </div>
    )
}

export default NavBar;