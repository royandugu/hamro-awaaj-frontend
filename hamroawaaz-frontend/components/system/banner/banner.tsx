import PrimaryButton from "../primaryButton/primaryButton";
import Blob from "../../../public/blob.svg";
import Image from "next/image";
import Symbol from "../../../public/handSymbol.png";

import "./banner.css";

type Banner = {
    title: string,
    route: string
}

const Banner = (props: Banner) => {
    return (
        <>
            <section className="relative">
                <div className="flex justify-between">
                    <div className="bannerContentContainer pt-40 w-3/2">
                        <h1> Bridging&nbsp;Silence </h1>
                        <h1><span className="text-primary">With&nbsp;</span>Communication  </h1>
                        <p className="max-w-[650px] text-black"> The project ”Hamro Aawaj” addresses the communication challenges faced by individuals with hearing and vocal impairments in Nepal by harnessing the power of hand gesture recognition, text conversion, and speech synthesis technologies. </p>
                        <div className="gap-5 mt-10">
                            <PrimaryButton text="Register" classes="w-full text-white"/>
                            <PrimaryButton text="Login" customColor="black" classes="w-full mt-2 text-white"/>
                        </div>
                    </div>
                    <div className="relative">
                        <Image src={Blob} alt="blog-logo" height={600} width={600} className="opacity-70"/>
                        <Image src={Symbol} alt="symbol-guy" height={800} className="absolute top-0 left-0 bottom-0"/> 
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;