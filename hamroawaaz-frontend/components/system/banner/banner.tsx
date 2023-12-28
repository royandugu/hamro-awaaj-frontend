import "./banner.css";

type Banner={
    title:string,
    route:string
}

const Banner=(props:Banner)=>{
    return(
        <div className="banner pt-[100px] pb-[100px] text-white flex justify-between items-center">
            <h1> {props.title} </h1>
            <h1> {props.route} </h1>
        </div>
    )
}

export default Banner;