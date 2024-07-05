
import PrimaryButton from "../../components/wrappers/primaryButton/primaryButton";

const PrefrencesDisplay = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5 items-center md:justify-center">
            <div className="border-[2px] border-[#eae9ee] rounded p-10 accountDisplay capitalize max-w-lg mt-5 md:m-0">
                <h6> Choose your Audio model : </h6>
                <form className="mt-10">
                    <label> Choose model: </label><br />
                    <select className="p-5 mt-5 w-full rounded cursor-pointer mb-10">
                        <option value="light"> Model one </option>
                        <option value="dark">  Model two </option>
                    </select><br />
                    <PrimaryButton type="submit" classes="capitalize w-full mb-3"> Save Changes </PrimaryButton>
                    <PrimaryButton type="submit" classes="capitalize w-full"> Revert to default </PrimaryButton>
                </form>
            </div>
            <div className="border-[2px] border-[#eae9ee] rounded p-10 accountDisplay capitalize max-w-lg">
                <h6> Choose your video model : </h6>
                <form className="mt-10">
                    <label> Choose model: </label><br />
                    <select className="p-5 mt-5 w-full rounded cursor-pointer mb-10">
                        <option value="light"> Model one </option>
                        <option value="dark">  Model two </option>
                    </select><br />
                    <PrimaryButton type="submit" classes="capitalize w-full mb-3"> Save Changes </PrimaryButton>
                    <PrimaryButton type="submit" classes="capitalize w-full"> Revert to default </PrimaryButton>
                </form>
            </div>
        </div>
    )
}

export default PrefrencesDisplay;