import "./banner.css";

type Banner={
    title:string,
    route:string
}

const Banner=(props:Banner)=>{
    return(
        <div className="bg-primary clipPath">
            <div className="pt-[40vh] pb-[60vh] pl-[20%]">
                <h1 className="text-white"> Heading </h1>
                <h1 className="text-white"> <span className="text-gray">Lorem</span> Ipsum Dolor. </h1>
                <p className="text-white max-w-[650px] mt-5"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus odio architecto facilis error consectetur quod adipisci, quis, suscipit cupiditate beatae magnam delectus dolore commodi maiores minus voluptate dicta voluptatum ad.</p>
                <button className="mt-10 py-5 px-10 bg-secondary font-bold text-white uppercase text-[15px]">Download</button>
            </div>
        </div>
    )
} 

export default Banner;