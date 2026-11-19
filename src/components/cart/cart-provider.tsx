"use client";
import {createContext,useContext,useEffect,useState,type ReactNode} from "react";
export type CartItem={productId:string;variantId:string;productSlug:string;productName:string;colorName:string;sizeName:string;price:number;currency:string;imageUrl?:string;quantity:number};
type CartContext={items:CartItem[];addItem:(item:Omit<CartItem,"quantity">)=>void;removeItem:(variantId:string)=>void;open:boolean;setOpen:(open:boolean)=>void};
const Context=createContext<CartContext|null>(null);
export function CartProvider({children}:{children:ReactNode}){const [items,setItems]=useState<CartItem[]>([]);const [open,setOpen]=useState(false);useEffect(()=>{try{const saved=localStorage.getItem("edge-spark-cart");if(saved)setItems(JSON.parse(saved))}catch{}},[]);useEffect(()=>{localStorage.setItem("edge-spark-cart",JSON.stringify(items))},[items]);const addItem=(item:Omit<CartItem,"quantity">)=>{setItems(old=>{const found=old.find(i=>i.variantId===item.variantId);return found?old.map(i=>i.variantId===item.variantId?{...i,quantity:i.quantity+1}:i):[...old,{...item,quantity:1}]});setOpen(true)};return <Context.Provider value={{items,addItem,removeItem:id=>setItems(old=>old.filter(i=>i.variantId!==id)),open,setOpen}}>{children}</Context.Provider>}
export function useCartContext(){const context=useContext(Context);if(!context)throw new Error("CartProvider is missing");return context}
