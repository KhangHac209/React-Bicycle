import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(localStorage.getItem("LIST_BICYLE") ? JSON.parse(localStorage.getItem("LIST_BICYLE")) : []);

    const addtoCart = (product, inputQuantity) => {
        const newCart = [...cart];

        const checkIndexProduct = newCart.findIndex((item) => item.id === product.id);
        if (checkIndexProduct >= 0) {
            newCart[checkIndexProduct].quantity += inputQuantity; //lay value cua input
        } else {
            product.quantity = inputQuantity;
            newCart.push(product);
        }
        setCart(newCart);
        localStorage.setItem("LIST_BICYLE", JSON.stringify(newCart));
    };
    const deleteCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };
    const deleteAllCart = () => {
        setCart([]);
    };
    return <CartContext.Provider value={{ cart, addtoCart, deleteCart, deleteAllCart }}>{children}</CartContext.Provider>;
};

const useCart = () => {
    return useContext(CartContext);
};
export { CartProvider, useCart };
