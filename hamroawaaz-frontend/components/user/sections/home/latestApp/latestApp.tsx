import SecondaryButton from "../../../../system/secondaryButton/secondaryButton";

import "./latestApp.css";

const LatestApp = () => {
    return (
        <section className="latestApp p-0 normalSection">
            <div className="flex bg-opacity-80 bg-primary flex-col justify-center items-center h-full w-full p-20">
                <h2 className="text-white"> Download our<span className="text-secondary"> latest app </span></h2>
                <p className="text-white max-w-3xl text-center">There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>

                <div className="flex mt-10 gap-10">
                    <SecondaryButton text="Download in Playstore" />
                    <SecondaryButton text="Download in Appstore" />
                </div>
            </div>
        </section>
    )
}
export default LatestApp;