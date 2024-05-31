import ServicesBlob from "../../../../../public/blob.svg";

import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { GoArrowDown } from "react-icons/go";


import Image from "next/image";

const Services = () => {
    return (
        <section id="services" className=" pb-10 pt-10 sm:pb-20">
            <div className="flex flex-col-reverse lg:flex-row gap-0 lg:gap-20">
                <div className=" relative lg:w-1/2">
                    <Image src={ServicesBlob} alt="services-blob" width={700} />
                    <div className="absolute bg-red-500 top-[20%]">
                        <div className="w-full border-[1px] border-[#eae9ee] bg-white shadow-2xl p-8 relative rounded">
                            <div className="h-[200px] overflow-auto">
                                <p className="mt-0"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit porro cumque quod quo, ullam laboriosam odio aliquam, excepturi impedit consequatur pariatur. Obcaecati optio cumque ipsa consequuntur nobis! Optio, minus explicabo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit porro cumque quod quo, ullam laboriosam odio aliquam, excepturi impedit consequatur pariatur. Obcaecati optio cumque ipsa consequuntur nobis! </p>
                            </div>
                            <div className="border-t-[2px] border-[#eae9ee] mt-5 pt-5">
                                <audio controls className="rounded w-full" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <h2> Services </h2>

                    <p> We tend to use this web application to bridge communication gap and empower the deaf community. To get a small experience among the services provided by our platform, feel free to click on the play icon of the audio control provided. </p>
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