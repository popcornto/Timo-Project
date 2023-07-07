import { useState } from "react";

export default function Row(props){
    const [content, setContent] = useState({
        title: "",
        id: "",
        customer: "",
        deliverDate: "",
        price: "",
    })
    const {title, id, customer, deliverDate, price} = content


    return (
        <>
        <div className="text-center border bg-stone-950"><h3>Projects</h3></div>
        <div className="text-center border bg-stone-950"><h3>ID</h3></div>
        <div className="text-center border bg-stone-950"><h3>Customer</h3></div>
        <div className="text-center border bg-stone-950"><h3>Date of delivery</h3></div>
        <div className="text-center border bg-stone-950"><h3>Price to work</h3></div>   
        </>
    )
}