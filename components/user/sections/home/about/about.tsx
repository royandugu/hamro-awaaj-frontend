import { CgWebsite } from "react-icons/cg";
import TeamVector from "../../../../../public/aboutTeam.svg";
import AboutImage from "../../../../../public/aboutImage.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
    return (
        <section id="about" className="pt-10 pb-10 sm:pt-20 sm:pb-20 relative overflow-hidden">
            <div className="flex justify-center z-1">
                <div className="max-w-4xl">
                    <h2 className="text-center"> About us </h2>
                    <p> We are "Hamro Aawaj," a bridge for communication in Nepal. We believe everyone deserves to be heard and understood. That's why we're developing a web app that uses hand gesture recognition for Nepali Sign Language and Nepali speech synthesis. This technology will empower deaf and vocally impaired communities to express themselves and access information, fostering greater independence and connection. </p>
                    <div className="mt-5 flex flex-col items-center">
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