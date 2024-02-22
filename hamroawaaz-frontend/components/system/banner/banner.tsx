import "./banner.css";

type Banner = {
    title: string,
    route: string
}

const Banner = (props: Banner) => {
    return (
        <div className="relative">
            <div className="bg-primary clipPath">
                <div className="pt-75 pb-100 pl-[20%]">
                    <h1 className="text-white"> Heading </h1>
                    <h1 className="text-white"> <span className="text-secondary">Lorem</span> Ipsum Dolor. </h1>
                    <p className="text-white max-w-[650px] mt-5"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus odio architecto facilis error consectetur quod adipisci, quis, suscipit cupiditate beatae magnam delectus dolore commodi maiores minus voluptate dicta voluptatum ad.</p>
                    <button className="mt-10 py-5 px-10 bg-secondary font-bold text-white uppercase text-[20px]">Download</button>
                </div>
            </div>
            <img src="https://torres-react.pages.dev/static/media/banner-mobile.b19da15cea518032450f.png" className="absolute right-[10%] top-[15%]"/>

        </div>
    )
}

export default Banner;