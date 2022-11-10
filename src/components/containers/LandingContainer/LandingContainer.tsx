import React, { useEffect, useState } from "react";

import customFetch from "../../../utility/customFetch";
import ThinCard from "../../cards/ThinCard";
import Text32P from "../../text/left/32P/Text32P";
import styles from './LandingContainer.styles'

import customFilter from "../../../utility/customFilter";

import Loader from "../../icons/Loader/Loader"

const LandingContainer = (props: {
    children?: any,
    color: string,
    cardColor: string,
    text: string,
    season: number,
}) => {

    const [data, setData] = useState<any>([]);


    let filter = [{key: "categoryId", value: props.season}, {key: "highlighted", value: true}]
    useEffect(() => {
        setData([])
        customFetch(500, customFilter(filter))
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [])

    // useEffect(() => {
    //     customFetch(500, customFilter(`${props.season}`, 'highlighted'))
    //         .then(res => setData(res))
    //         .catch(err => console.log(err))
    // }, [])

    // console.log(data)

    let cardColor;
    let path;
    if (props.season == 1) {
        cardColor="#97C77A"
        path= '/Spring/'
    } else if(props.season == 2) {
        cardColor="#C77AB6"
        path= '/Summer/'
    } else if(props.season == 3) {
        cardColor="#C7A47A"
        path= '/Autumn/'
    } else if(props.season == 4) {
        cardColor="#7AC2C7"
        path= '/Winter/'
    }

    return (
        <div className = {styles.container} style={{background: `linear-gradient(180deg, ${props.color} 0%, rgba(255, 246, 235, 0) 100%)`,}} >
            <Text32P text= {props.text} />
            <div className= {styles.cardArea}>
                {
                    data.length > 0 
                    ? data.map( item => <ThinCard path={path} color={cardColor} key={item.id} id={item.id} name={item.name} price={item.price} url={item.img} />)
                    : <Loader color={cardColor} />
                    // : <p>Loading...</p>
                }
            </div>
        </div>
    )
}

export default LandingContainer;