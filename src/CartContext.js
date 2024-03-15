import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(localStorage.getItem("LIST_BICYLE") ? JSON.parse(localStorage.getItem("LIST_BICYLE")) : []);

    const addtoCart = (product) => {
        const newCart = [...cart];

        const checkIndexProduct = newCart.findIndex((item) => item.id === product.id);
        if (checkIndexProduct >= 0) {
            newCart[checkIndexProduct].quantity++;
        } else {
            product.quantity = 1;
            newCart.push(product);
        }
        setCart(newCart);
        localStorage.setItem("LIST_BICYLE", JSON.stringify(newCart));
    };

    return <CartContext.Provider value={{ cart, addtoCart }}>{children}</CartContext.Provider>;
};

const useCart = () => {
    return useContext(CartContext);
};
export { CartProvider, useCart };
