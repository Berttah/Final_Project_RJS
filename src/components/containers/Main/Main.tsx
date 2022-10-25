import React from "react";
import LandingContainer from "../LandingContainer/LandingContainer";
import styles from './Main.styles'

const Main = (props: {
    style?: string
}) => {

    return (
        <div className= {styles.container}>
            <LandingContainer color="#F8FFF4" cardColor="#97C77A" text="Spring Highlights"/>
            <LandingContainer color="#FFF7FD" cardColor="#C77AB6" text="Summer Highlights" />
            <LandingContainer color="#FFF6EB" cardColor="#C7A47A" text="Autumn Highlights" />
            <LandingContainer color="#EBFEFF" cardColor="#7AC2C7" text="Winter Highlights" />
        </div>
    )
}

export default Main;