/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client"
import { Product } from "@/types/product";
import { createContext, useState} from "react";

export const CartContext = createContext({});

// Create the provider
export const CartProvider = ({ children }:any) => {

  const [qty, setQty] = useState<number>(1);
 const [cartItems , setCartItems] = useState<any[]>([]);
 const[totalQuantity,setTotalQuantity] = useState(0);
const [totalPrice , setTotalPrice] = useState(0)
 const incQty = () => {
    setQty((prevQty) => prevQty + 1 )
 }
 const decQty = () => {
    setQty((prevQty) => {
        
        if(prevQty-1 < 1)return 1;
        
        return prevQty - 1
    } )
 }

 const addProduct = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
  
  
    setTotalQuantity((prev) => {
        
        const newTotal = prev + quantity;
        return newTotal;
      });

setTotalPrice((prevTotalprice)=>prevTotalprice + product.price*quantity)


    if (checkProductInCart) {
      // Update existing product's quantity
      const updatedCartItems = cartItems.map((cartproduct) =>
        cartproduct._id === product._id
          ? { ...cartproduct, quantity: cartproduct.quantity + quantity }
          : cartproduct
      );
      setCartItems(updatedCartItems);
    } else {
      // Add new product with initial quantity
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };
  
  const onRemove = (product:Product)=>{
   
    const foundproduct = cartItems.find((item)=> item._id === product._id)

    const newCartItems = cartItems.filter((item)=> item._id !== product._id)
   
      setCartItems(newCartItems)
      setTotalPrice((prevTotal)=> prevTotal - foundproduct.price*foundproduct.quantity)
      setTotalQuantity((prevTotalQuantity)=> prevTotalQuantity - foundproduct.quantity)
     }

  return (
    <CartContext.Provider value={{onRemove, qty , incQty , decQty , cartItems, addProduct , totalQuantity , totalPrice}}>
      <div>{children}</div>
    </CartContext.Provider>
  );
};
