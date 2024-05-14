import PrimaryButton from "../primaryButton/primaryButton";
import SecondaryButton from "../secondaryButton/secondaryButton";
import "./banner.css";

type Banner = {
    title: string,
    route: string
}

const Banner = (props: Banner) => {
    return (
        <>
            <section className="relative bg-primary clipPath">
                <div className="flex">
                    <div className="bannerContentContainer pt-75 pb-100 w-3/2">
                        <h1> Bridging&nbsp;&nbsp;Silence </h1>
                        <h1><span className="text-secondary">With&nbsp;</span>&nbsp;Communication  </h1>
                        <p className="max-w-[650px]"> The project ”Hamro Aawaj” addresses the communication challenges faced by individuals with hearing and vocal impairments in Nepal by harnessing the power of hand gesture recognition, text conversion, and speech synthesis technologies. </p>
                        <div className="flex gap-5 mt-10">
                            <PrimaryButton text="Register" />
                            <SecondaryButton text="Log In"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;