import ServicesBlob from "../../../../../public/blob.svg";
import Image from "next/image";

const Services = () => {
    return (
        <section id="services" className="pt-10 pb-10 sm:pt-20 sm:pb-20">
            <div className="flex justify-between">
                <div>
                    <h2> Services </h2>
                    <div className="flex flex-col lg:flex-row gap-20">
                        <Image src={ServicesBlob} alt="services-blob" width={500}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services;