import { FaArrowRightLong } from "react-icons/fa6";

const aboutText = "We are Hamro Aawaj, a bridge for communication in Nepal. We believe everyone deserves to be heard and understood. Thats why were developing a web app that uses hand gesture recognition for Nepali Sign Language and Nepali speech synthesis. This technology will empower deaf and vocally impaired communities. The team of hamro aawaj comprises of :-";

const About = () => {
    return (
        <section id="about" className="pt-10 pb-10 sm:pt-20 sm:pb-20 relative overflow-hidden haSection">
            <div className="flex justify-center z-1">
                <div>
                    <h2 className="lg:text-center mb-5"> About us </h2>
                    <div className="max-w-4xl">
                    <p className="mb-10"> {aboutText} </p>
                    </div>
                    
                    <ul className="max-w-[472px] m-auto">
                        <li className="flex items-center gap-4 mt-5 w-full">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className="italic mt-0 text-[rgb(150,150,150)]">Rikesh Silwal, 8th Sem, NCIT, AI engineer</p>
                        </li>
                        <li className="flex items-center gap-4 mt-5 w-full">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className="italic mt-0 text-[rgb(150,150,150)]">Saalma Tamang, 8th Sem, NCIT, AI engineer</p>
                        </li>
                        <li className="flex items-center gap-4 mt-5 w-full">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className="italic mt-0 text-[rgb(150,150,150)]">Arun Bikram, 8th Sem, NCIT, Back-end developer</p>
                        </li>
                        <li className="flex items-center gap-4 mt-5 w-full">
                            <FaArrowRightLong size={30} className="text-[#ff9c85]" />
                            <p className="italic mt-0 text-[rgb(150,150,150)]">Royan Dugu, 8th Sem, NCIT, Front-end developer</p>
                        </li>
                    </ul>


                </div>

            </div>
        </section>
    )
}
export default About;