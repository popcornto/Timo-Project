import { useState } from "react"

export default function Input(props){

    const [content, setContent] = useState({
        title: "",
        id: "",
        customer: "",
        deliverDate: "",
        price: "",
    })

    const {title, id, customer, deliverDate, price} = content
    function handleInput(event){
        const textValue = event.target.value
        console.log(textValue) 
    }

    return (
        <div className="flex flex-col justify-center items-center h-67 w-67 bg-black">
            <form className="w-40 h-40" action="">
                <input  onChange={handleInput} value={title} type="text" placeholder="Project Title"/>
                <input  onChange={handleInput} value={id} type="text" placeholder="Project ID"/>
                <input  onChange={handleInput} value={customer} type="text" placeholder="Customer Name"/>
                <input  onChange={handleInput} value={deliverDate} type="text" placeholder="Date of delivery"/>
                <input  onChange={handleInput} value={price} type="text" placeholder="Price to work"/>
            </form>
        </div>
    )
}