// esto es de la ultima clase, no tiene efecto en el proyecto aun.


import { createContext } from "react";

const CartContext = createContext();

{/* Va en Home englobando el Browser Router */}

// crear una carpeta de contexto en caso de que tenga mas de 1 contexto


{/*

<CartContext.provider value={
    [
        {name: 'Coca Cola', price: 10},
        {name: 'Pepsi', price: 8},
    ]
}

la cosa seria hacer una funcion que al darle al boton de cart, añada el producto usando la id al CartContext

*/}



{/*

import { useContext } from "react";
import { CartContext } from "..."

const Cart = () => {
    const test = useContext(CartContext)
    console.log(test)

    return (
        <ul>
            {
                test.map(item => <li>{item.name}</li)
            }
        </ul>
    )

}


*/}


{/*

Pasaria a englobar con <CartContextProvider>

//////////////////////////

import { createContext, useEffect } from "react";

const CartContextProvider = (props) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (item) => {
        setCartList([
            ...cartList,
            item
        ])
    }

    const clear =()=> {
        setCartList([])
    }

    const deleteItem =(id)=> {
        filter: todos menos la id
        setCartList(filter)
    }

    return (
        <CartContext value={{cartList, addToCart}}>
            {props.children}
        <CartContext/>
        
    )

}


*/}

{/*
    {
        test.cartList.length === 0
            ? <li>No hay productos en el carrito</li>
            : <li>test.cartList.map(item => <li>{item.name}</li)
    }
*/}