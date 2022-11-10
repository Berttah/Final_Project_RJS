import React from "react";
import styles from './SeasonContainer.styles'
import { useEffect, useState } from "react";
import customFetch from "../../../utility/customFetch";
import customFilter from "../../../utility/customFilter";
import ProductCard from "../../cards/ProductCard/ProductCard";
import Text26P_C from "../../text/center/26P_C/Text26P_C";

import { useParams } from "react-router-dom";
import Loader from "../../icons/Loader/Loader"


const SeasonContainer = (props: {
    children?: any,
    color: string,
    season: number
}) => {

    const [data, setData] = useState<any>([]);
    const [mostSold, setMostSold] = useState<any>([]);

    let filter = [{key: "categoryId", value: props.season}, {key: "mostSold", value: false}]
    let mostSoldFilter = [{key: "categoryId", value: props.season}, {key: "mostSold", value: true}]

    useEffect(() => {
        setData([])
        customFetch(500, customFilter(filter))
            .then(res => setData(res))
            .catch(err => console.log(err))
        customFetch(500, customFilter(mostSoldFilter))
            .then(res => setMostSold(res))
            .catch(err => console.log(err))
    }, [props.season])
    // useEffect(() => {
    //     setData([])
    //     customFetch(500, customFilter(`${props.season}`, 'notMostSold'))
    //         .then(res => setData(res))
    //         .catch(err => console.log(err))
    //     customFetch(500, customFilter(`${props.season}`, 'mostSold'))
    //         .then(res => setMostSold(res))
    //         .catch(err => console.log(err))
    // }, [props.season])


    let cardColor;
    let textMostSold;
    let path;

    if (props.season == 1) {
        cardColor="#97C77A"
        textMostSold='Spring Most Sold'
        path= '/Spring/'
    } else if(props.season == 2) {
        cardColor="#C77AB6"
        textMostSold='Summer Most Sold'
        path= '/Summer/'
    } else if(props.season == 3) {
        cardColor="#C7A47A"
        textMostSold='Autumn Most Sold'
        path= '/Autumn/'
    } else if(props.season == 4) {
        cardColor="#7AC2C7"
        textMostSold='Winter Most Sold'
        path= '/Winter/'
    }

    return (

        <div className = {styles.Container} style={{background: `linear-gradient(180deg, ${props.color} 0%, rgba(255, 246, 235, 0) 100%)`,}} >
            <div className= {styles.leftArea} style={{background: props.color}}>
                <Text26P_C text={textMostSold} />
                {
                   mostSold.length > 0 
                   ? mostSold.map( (item,index) => <ProductCard path={path} color={cardColor} key={index} id={item.id} name={item.name} price={item.price} url={item.img} />)
                   : <Loader color={cardColor} />
                    // : <p>Loading...</p>
                }
            </div>
            <div className= {styles.rightArea}>
                {
                    data.length > 0 
                            ? data.map( item => <ProductCard path={path} color={cardColor} key={item.id} id={item.id} name={item.name} price={item.price} url={item.img} />)
                            : <Loader color={cardColor} />
                            // : <p>Loading...</p>
                }
            </div>

        </div>
    )
}

export default SeasonContainer;