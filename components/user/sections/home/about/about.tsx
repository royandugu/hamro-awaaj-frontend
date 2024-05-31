import { FaArrowRightLong } from "react-icons/fa6";

const aboutText = "We are Hamro Aawaj, a bridge for communication in Nepal. We believe everyone deserves to be heard and understood. That&npos;s why we&npos;re developing a web app that uses hand gesture recognition for Nepali Sign Language and Nepali speech synthesis. This technology will empower deaf and vocally impaired communities to express themselves and access information, fostering greater independence and connection.";

const About = () => {
    return (
        <section id="about" className="pt-10 pb-10 sm:pt-20 sm:pb-20 relative overflow-hidden">
            <div className="flex justify-center z-1">
                <div className="max-w-4xl">
                    <h2 className="lg:text-center"> About us </h2>
                    <p> {aboutText} </p>
                    
                    <div className="mt-5 flex flex-col items-center lg:pl-[30%]">
                        <div className="flex items-center gap-4 mt-5 w-full">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className="italic mt-0 text-[rgb(150,150,150)]">Rikesh Silwal, 8th Sem, NCIT, AI engineer</p>
                        </div>
                        <div className="flex items-center gap-4 mt-5 w-full">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className="italic mt-0 text-[rgb(150,150,150)]">Saalma Tamang, 8th Sem, NCIT, AI engineer</p>
                        </div>
                        <div className="flex items-center gap-4 mt-5 w-full">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className="italic mt-0 text-[rgb(150,150,150)]">Arun Bikram, 8th Sem, NCIT, Back-end developer</p>
                        </div>
                        <div className="flex items-center gap-4 mt-5 w-full">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className="italic mt-0 text-[rgb(150,150,150)]">Royan Dugu, 8th Sem, NCIT, Front-end developer</p>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}
export default About;