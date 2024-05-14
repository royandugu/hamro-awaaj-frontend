const About = () => {
    return (
        <section className="flex flex-col justify-center items-center pt-0 mt-[-50px] normalSection">
            <h1> About us </h1>
            <p className="max-w-203 text-center"> We are a passionate group of students driven by the belief that AI holds the key to solving some of humanity's most pressing challenges. Through innovative projects and collaborations, we strive to make a positive impact on the world, one algorithm at a time. Join us on our journey to harness the potential of AI for the greater good. </p>
            <div className="mt-20">
                <div className=" grid grid-cols-1 sm:grid-cols-2 justify-center grid-rows-2 gap-10 md:gap-20">
                    <div className="flex flex-col items-center gap-5 md:gap-10">
                        <div className=" bg-secondary p-2 rounded-full">
                            <img src="https://torres-react.pages.dev/static/media/1.4eaec6c30bd39e0edd14.png" />
                        </div>
                        <div className="text-center">
                            <h5> Rikesh Silwal  </h5>
                            <p className="text-[rgb(150,150,150)]"> - AI developer </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 md:gap-10">
                        <div className=" bg-secondary p-2 rounded-full">
                            <img src="https://torres-react.pages.dev/static/media/1.4eaec6c30bd39e0edd14.png" />
                        </div>
                        <div className="text-center">
                            <h5> Saalma Tamang </h5>
                            <p className="text-[rgb(150,150,150)]"> - AI developer </p>
                        
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 md:gap-10">
                        <div className=" bg-secondary p-2 rounded-full">
                            <img src="https://torres-react.pages.dev/static/media/1.4eaec6c30bd39e0edd14.png" />
                        </div>
                        <div className="text-center">
                            <h5> Arun Bikram Khatri </h5>
                            <p className="text-[rgb(150,150,150)]"> - Backend developer </p>
                        
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 md:gap-10">
                        <div className=" bg-secondary p-2 rounded-full">
                            <img src="https://torres-react.pages.dev/static/media/1.4eaec6c30bd39e0edd14.png" />
                        </div>
                        <div className="text-center">
                            <h5> Royan Dugu </h5>
                            <p className="text-[rgb(150,150,150)]"> - Frontend developer </p>
                        
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default About;