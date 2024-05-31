
import PrimaryButton from "../primaryButton/primaryButton";

const PrefrencesDisplay = () => {
    return (
        <section className="border-[2px] border-[#eae9ee] rounded p-10 accountDisplay capitalize max-w-lg m-auto">
            <h6> Admin Prefrences : </h6>
            <form className="mt-10">
                <label> Choose model: </label><br />
                <select className="p-5 mt-5 w-full rounded cursor-pointer">
                    <option value="light"> Model one </option>
                    <option value="dark">  Model two </option>
                </select><br />
                <PrimaryButton type="submit" text="Save changes" classes="capitalize w-full mt-10" />
                <PrimaryButton text="Revert to default" classes="capitalize mt-3 w-full text-white" customColor="[#1c2434]"/>
            
            </form>
        </section>
    )
}
export default PrefrencesDisplay
;