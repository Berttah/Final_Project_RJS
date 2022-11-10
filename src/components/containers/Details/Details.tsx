import React from "react";
import styles from './Details.styles'
import { useEffect, useState } from "react"; 
import customFetch from "../../../utility/customFetch";
import customFilter from "../../../utility/customFilter";

import { useParams } from "react-router-dom";
import DeetImg from "../../cards/DeetImg/DeetImg";

import Text14P_C from "../../text/center/14P_C/Text14P_C";
import Text26P_C from "../../text/center/26P_C/Text26P_C";
import Text32P from "../../text/left/32P/Text32P";

import CartIcon from "../../icons/CartIcon/CartIcon"
import Loader from "../../icons/Loader/Loader"


const Details = (props: {
    children?: any,
    color: string,
    season: number
}) => {

    let { id } = useParams();
    console.log(id)

    const [data, setData] = useState<any>([]);

    let filter = [{key: "id", value: id}]
    useEffect(() => {
        setData([])
        customFetch(500, customFilter(filter))
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [])

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

        <div className = {styles.Container} style={{background: `linear-gradient(180deg, ${props.color} 0%, rgba(255, 246, 235, 0) 100%)`,}} >

            <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                {
                    data.length > 0 
                            ? data.map( item => 
                                <div className={styles.deets}>
                                    <div className={styles.DeetCard}>
                                        <DeetImg url={item.img} color={cardColor} />

                                        <div style={{display:'flex',flexDirection:'column',gap:'50px'}}>
                                            <div style={{width:'600px',display:'flex',flexDirection:'column',gap:'20px'}}>
                                            <div className={styles.title}>
                                                <Text32P text={item.name} />
                                            </div>

                                                {/* here I use this description because I don't want to write one for each item */}

                                                <Text14P_C text='Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus molestie quam a fermentum vivamus, dictum laoreet curae nostra rhoncus vehicula eu suspendisse eleifend morbi aliquet. Natoque justo varius nostra nam litora hendrerit morbi volutpat, ultrices molestie dignissim faucibus fermentum cubilia eleifend auctor ullamcorper, quam ante pellentesque eu fusce mollis maecenas. Nisl semper dignissim pretium curae platea vel dui est, habitasse sociosqu tellus mollis accumsan ad habitant, leo cras vitae cubilia sapien velit id.' />
                                                <Text14P_C text="Nulla faucibus aliquam sed tellus cursus accumsan curae sem, lacus urna volutpat potenti at habitasse cubilia velit quam, varius porttitor rhoncus diam bibendum justo eleifend. Nec sociosqu et leo luctus tortor netus nostra malesuada, nam posuere aenean id penatibus senectus venenatis, curae faucibus proin porttitor cursus feugiat fus ce." />
                                            </div>

                                            <div style={{display:'flex',flexDirection:'row',gap:'50px',alignItems:'center',justifyContent:'space-around'}}>
                                                <Text26P_C text={`$ ${item.price}`} />
                                                
                                                <Text14P_C text={`Stock: S: ${item.sizeQty.S} M: ${item.sizeQty.M} XL: ${item.sizeQty.XL}`} />
                                                
                                                <CartIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            : <Loader color={cardColor} />
                            // : <p>Loading...</p>
                }
            </div>

        </div>
    )
}

{/* <ProductCard path={path} color={cardColor} key={item.id} id={item.id} name={item.name} price={item.price} url={item.img} /> */}

export default Details;