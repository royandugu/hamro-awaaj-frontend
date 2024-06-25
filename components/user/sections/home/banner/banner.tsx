import { FaUserAlt } from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";

import PrimaryButton from "../../../../system/components/wrappers/primaryButton/primaryButton";
import Blob from "../../../../../public/blob.svg";
import Image from "next/image";
import Symbol from "../../../../../public/Designer.png";
import Link from "next/link";
import SecondaryButton from "../../../../system/components/wrappers/secondaryButton/secondaryButton";

const Banner = () => {
    return ( 
        <section id="hero" className="relative bg-[#eae9ee] haSection">
            <div className="flex justify-between items-center overflow-hidden">
                <div className="bannerContentContainer pt-15 pb-15 sm:pt-20 sm:pb-20 lg:pt-0 lg:pb-0">
                    <h1> Bridging Silence </h1>
                    <h2 className="mb-5"><span className="text-primary xl:whitespace-nowrap">With </span>Communication .</h2>
                    
                    <p className="max-w-[650px] text-black mb-10"> The project ”Hamro Aawaj” addresses the communication challenges faced by individuals with hearing and vocal impairments in Nepal by harnessing the power of hand gesture recognition, text conversion, and speech synthesis technologies. </p>
                    <div className="flex flex-col lg:flex-row gap-3">
                        <Link href="#services"><PrimaryButton classes="w-full lg:w-auto"> <span className="flex gap-3 items-center"><RiContactsBookFill className="text-white"/> Contact us</span> </PrimaryButton></Link>
                        <SecondaryButton classes="w-full lg:w-auto"> <span className="flex gap-3 items-center"><FaUserAlt className="text-white"/> Guest Login</span> </SecondaryButton>
                    </div>
                </div>
                <div className="relative hidden h-full lg:block xl:pb-20 pt-20">
                    <Image src={Blob} alt="blog-logo" height={600} width={600} className="opacity-70" />
                    <Image src={Symbol} alt="symbol-guy" className="absolute right-0 bottom-0" />
                </div>
            </div>
        </section>

    )
}

export default Banner;