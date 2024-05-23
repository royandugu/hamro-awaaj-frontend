import PrimaryButton from "../primaryButton/primaryButton";
import "./banner.css";

type Banner = {
    title: string,
    route: string
}

const Banner = (props: Banner) => {
    return (
        <>
            <section className="relative">
                <div className="flex">
                    <div className="bannerContentContainer pt-40 w-3/2">
                        <h1> Bridging&nbsp;&nbsp;Silence </h1>
                        <h1><span className="text-secondary">With&nbsp;</span>&nbsp;Communication  </h1>
                        <p className="max-w-[650px] text-black"> The project ”Hamro Aawaj” addresses the communication challenges faced by individuals with hearing and vocal impairments in Nepal by harnessing the power of hand gesture recognition, text conversion, and speech synthesis technologies. </p>
                        <div className="gap-5 mt-10">
                            <PrimaryButton text="Register" classes="w-full rounded-2xl"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;