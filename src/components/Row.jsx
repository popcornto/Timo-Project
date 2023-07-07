export default function Row(props){
    return (
      <div  className="whitespace-pre underline text-3xl h-24 flex flex-row items-center justify-evenly w-full h-9 ">
      <div  className="underline w-screen text-3xl h-12 bg-black pl-3 p-auto border"><h3>{props.title}</h3></div>
      <div  className="underline w-screen text-3xl h-12 bg-black pl-3 p-auto border"><h3>{props.customer}</h3></div>
      <div  className="underline w-screen text-3xl h-12 bg-black pl-3 p-auto border"><h3>{props.dateOfdelivery}</h3></div>
      <div  className="underline w-screen text-3xl h-12 bg-black pl-3 p-auto border"><h3>{props.price}</h3></div>
      <div  className="underline w-screen text-3xl h-12 bg-black pl-3 p-auto border"><h3>{props.bla}</h3></div>  
      </div> 
    )
}