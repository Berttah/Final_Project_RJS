import React from "react";
import LandingContainer from "../LandingContainer/LandingContainer";
import styles from './Main.styles'

const Main = (props: {
    style?: string
}) => {

    return (
        <div className= {styles.container}>
            <LandingContainer color="#F8FFF4" cardColor="#97C77A" text="Spring Highlights" season={1} />
            <LandingContainer color="#FFF7FD" cardColor="#C77AB6" text="Summer Highlights" season={2} />
            <LandingContainer color="#FFF6EB" cardColor="#C7A47A" text="Autumn Highlights" season={3} />
            <LandingContainer color="#EBFEFF" cardColor="#7AC2C7" text="Winter Highlights" season={4} />
        </div>
    )
}

export default Main;