import type {Collection,Product} from "@/types/commerce";
const colors=[{name:"Onyx",value:"onyx",hex:"#252527"},{name:"Stone",value:"stone",hex:"#bbb7a8"}];
const sizes=["S","M","L","XL"].map(name=>({name,label:name,available:true}));
const base=[
 ["signal-overshirt","Signal Overshirt","A precise layer for everyday movement.",399900,"new"],
 ["frequency-tee","Frequency Tee","A quiet essential with an unexpected edge.",189900,"classics"],
 ["afterdark-jacket","Afterdark Jacket","Structure meets the city after hours.",649900,"statement"],
 ["archive-cargo","Archive Cargo","Utility refined for the modern wardrobe.",349900,"archives"],
] as const;
export const products:Product[]=base.map(([slug,name,description,price,collection],index)=>({id:slug,slug,name,tagline:"EDGE SPARK / EDIT 0"+(index+1),description,price,collectionIds:[collection,"new"],images:[],colors,sizes,variants:colors.flatMap(color=>sizes.map(size=>({id:`${slug}-${color.value}-${size.name}`,colorName:color.name,sizeName:size.name,price,available:true}))),deliveryNote:"Shipping details confirmed at checkout.",returnPolicy:"Contact the studio for return information."}));
export const collections:Collection[]=[
 {id:"new",slug:"new",title:"The New Edit",subtitle:"Fresh in rotation",description:"The latest pieces from EDGE SPARK.",sortOrder:1,productIds:products.map(p=>p.id)},
 {id:"statement",slug:"statement",title:"Statement",subtitle:"Make an entrance",description:"Pieces made to stand apart.",sortOrder:2,productIds:["afterdark-jacket"]},
 {id:"classics",slug:"classics",title:"Classics",subtitle:"Everyday essentials",description:"Considered pieces for every day.",sortOrder:3,productIds:["frequency-tee"]},
 {id:"archives",slug:"archives",title:"Archives",subtitle:"Built to last",description:"The pieces that stay in rotation.",sortOrder:4,productIds:["archive-cargo"]},
];
export const getCollections=()=>collections;
export const getCollection=(slug:string)=>collections.find(c=>c.slug===slug);
export const getProduct=(slug:string)=>products.find(p=>p.slug===slug||p.id===slug);
export const getProductsForCollection=(slug:string)=>getCollection(slug)?.productIds.map(getProduct).filter((p):p is Product=>Boolean(p))??[];
export const findVariant=(product:Product,color:string,size:string)=>product.variants.find(v=>v.colorName===color&&v.sizeName===size);
