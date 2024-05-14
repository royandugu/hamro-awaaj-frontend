import SecondaryButton from "../../../../system/secondaryButton/secondaryButton";


import "./latestApp.css";

const LatestApp = () => {
    return (
        <section className="latestApp p-0 normalSection">
            <div className="flex bg-opacity-80 bg-primary flex-col justify-center items-center h-full w-full p-20">
                <h2 className="text-white"> Register / <span className="text-secondary">Login now </span></h2>
                <p className="text-white max-w-3xl text-center">To get the best of the application and direct yourself to the dashboard, please login first. If you don't have an account created, you may register.</p>

                <div className="flex mt-10 gap-10">
                    <SecondaryButton text="Register your account" />
                    <SecondaryButton text="Login your account" />
                </div>
            </div>
        </section>
    )
}
export default LatestApp;