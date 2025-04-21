import { atom } from "recoil"

export const wishListState = atom({    
    key:"wishListState",
    default:[{
        id:1,
        name:"MacBook Pro Laptop",
        img:"https://m.media-amazon.com/images/I/31ogOjiaPdL._SY445_SX342_QL70_FMwebp_.jpg",  
        price:300000.00,
        quantity:1      
    },
    {
        id:2,
        name:"Keycap Keybaord",
        img:"https://m.media-amazon.com/images/I/61dpAJS-AfL._SX450_.jpg",  
        price:199.00,
        quantity:1      
    },
    {
        id:3,
        name:"Wall Lamp",
        img:"https://m.media-amazon.com/images/I/51L+df4QUKL._SX342_SY445_.jpg",  
        price:100.00,
        quantity:1      
    },
    {
        id:4,
        name:"Capybara Soft Toy",
        img:"https://m.media-amazon.com/images/I/41tc5NxCqdL._SY450_.jpg",  
        price:499.00,
        quantity:1      
    }]
})