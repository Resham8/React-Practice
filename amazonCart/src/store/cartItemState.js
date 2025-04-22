import { atom } from "recoil";

export const cartItemsState = atom({
    key:"cartItemState",
    default:[
        {
            id:2,
            name:"Keycap Keybaord",
            img:"https://m.media-amazon.com/images/I/61dpAJS-AfL._SX450_.jpg",  
            price:199.00,
            quantity:1      
        },
    ]
})