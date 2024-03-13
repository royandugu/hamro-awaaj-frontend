import PrimaryButton from "../primaryButton/primaryButton";
import "./banner.css";

type Banner = {
    title: string,
    route: string
}

const Banner = (props: Banner) => {
    return (
        <>
            <section className="relative bg-primary clipPath">
                <div className="bannerContentContainer pt-75 pb-100">
                    <h1> Heading </h1>
                    <h1> <span className="text-secondary">Lorem</span> Ipsum Dolor. </h1>
                    <p className="max-w-[650px]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus odio architecto facilis error consectetur quod adipisci, quis, suscipit cupiditate beatae magnam delectus dolore commodi maiores minus voluptate dicta voluptatum ad.</p>
                    <div className="mt-10"><PrimaryButton text="Download" /></div>
                </div>
            </section>
            <img src="https://torres-react.pages.dev/static/media/banner-mobile.b19da15cea518032450f.png" className="absolute right-[10%] top-[15%]" />
        </>
    )
}

export default Banner;