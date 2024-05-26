import { CgWebsite } from "react-icons/cg";
import TeamVector from "../../../../../public/aboutTeam.svg";
import AboutImage from "../../../../../public/aboutImage.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
    return (
        <section className="pt-20 pb-20">
            <div className="flex justify-between items-center">
                <Image src={TeamVector} alt="about-image" className="object-cover w-1/3" />
                <div className="pl-20 max-w-4xl">
                    <h2> About us </h2>
                    <p> We are a passionate group of students driven by the belief that AI holds the key to solving some of humanity's most pressing challenges. Through innovative projects and collaborations, we strive to make a positive impact on the world, one algorithm at a time. Join us on our journey to harness the potential of AI for the greater good. </p>
                    <div className="pl-7">
                        <div className="flex gap-3 mt-5">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className=" italic mt-0 text-[rgb(150,150,150)]"> Royan Dugu, 8th Sem, NCIT, Front-end developer </p>
                        </div>
                        <div className="flex gap-3 mt-5">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className=" italic mt-0 text-[rgb(150,150,150)]"> Royan Dugu, 8th Sem, NCIT, Front-end developer </p>
                        </div>
                        <div className="flex gap-3 mt-5">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className=" italic mt-0 text-[rgb(150,150,150)]"> Royan Dugu, 8th Sem, NCIT, Front-end developer </p>
                        </div>
                        <div className="flex gap-3 mt-5">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className=" italic mt-0 text-[rgb(150,150,150)]"> Royan Dugu, 8th Sem, NCIT, Front-end developer </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default About;