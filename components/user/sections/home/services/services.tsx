import ServicesBlob from "../../../../../public/blob.svg";

import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { GoArrowDown } from "react-icons/go";


import Image from "next/image";

const Services = () => {

    const text='"हाम्रो आवाज" वेबको अनुप्रयोगको नेपालीमा सुन्न र बोल्न अक्षम व्यक्तिहरुलाई नेपाली साङ्‌केतिक भाषाको पहिचान गरि कृतिम आवाजमा संवादको सुविधा प्रदान गर्दछ ।.'
    const englishText='"Hamro awaaj" web application provides communication facilities for people with hearing and speaking disabilities by recognizing Nepali sign language and converting it into artificial speech.'

    return (
        <section id="services" className=" pb-10 pt-10 sm:pb-20">
            <div className="flex flex-col-reverse lg:flex-row gap-0 lg:gap-20">
                <div className=" relative lg:w-1/2">
                    <Image src={ServicesBlob} alt="services-blob" className="hidden lg:block" width={500} />
                    <div className="lg:absolute lg:top-[200px]">
                        <div className="w-full border-[1px] border-[#eae9ee] bg-white shadow-2xl p-8 relative rounded">
                            <div className="overflow-auto">
                                <p className="mt-0"> {englishText} </p>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <h2> Services </h2>

                    <p>{text} </p>
                    <MdSubdirectoryArrowLeft size={130} className="text-primary mt-10 hidden lg:block" />
                    <div className="flex justify-center mt-5 w-full">
                        <GoArrowDown size={130} className="text-primary text-center block lg:hidden" />
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Services;