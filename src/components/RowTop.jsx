export default function RowTop(props){
    return (
      <div className="underline text-3xl h-24 flex flex-row items-center justify-evenly w-full h-9 ">
      <div className="underline text-3xl h-12 whitespace-nowrap bg-black pl-3 p-auto basis-1/4 border"><h3>Projects</h3></div>
      <div className="underline text-3xl h-12 whitespace-nowrap bg-black pl-3 p-auto basis-1/4 border"><h3>Name</h3></div>
      <div className="underline text-3xl h-12 whitespace-nowrap bg-black pl-3 p-auto basis-1/4 border"><h3>Customer</h3></div>
      <div className="underline text-3xl h-12 whitespace-nowrap bg-black pl-3 p-auto basis-1/4 border"><h3>Date to deliver</h3></div>
      <div className="underline text-3xl h-12 whitespace-nowrap bg-black pl-3 p-auto basis-1/4 border"><h3>Price for work</h3></div>  
      </div>
    )
}