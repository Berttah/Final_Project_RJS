import React from "react";
import { useEffect, useState } from "react";
import customFetch from "../../../utility/customFetch";
import customFilter from "../../../utility/customFilter";
import { Link } from "react-router-dom";
import CardImg from "../../containers/CardImg/CardImg";
import CardInfoBigger from "../../containers/CardInfoBigger/CardInfoBigger";
import styles from './ProductCard.styles'

const ProductCard = (props: {
    children?: any,
    color: string,
    name: string,
    price: string,
    url: string,
    key: number,
    path: string,
    id: string
}) => {

    const [data, setData] = useState<any>([]);

    let filter = [{key: "id", value: props.key}]
    useEffect(() => {
        setData([])
        customFetch(500, customFilter(filter))
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className = {styles.container} style={{borderTop: `3px solid ${props.color}`}} >

            <Link to={`${props.path}${props.id}`}> 
                <CardImg url={props.url} style={'product'} />
            </Link>

            <CardInfoBigger nameOnly={true} name={props.name} price='' textSize={false} />
            <CardInfoBigger nameOnly={false} name='' price={props.price} textSize={true} />
        </div>
    )
}

export default ProductCard;