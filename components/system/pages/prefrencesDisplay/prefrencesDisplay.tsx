
import PrimaryButton from "../../components/wrappers/primaryButton/primaryButton";

const PrefrencesDisplay = () => {
    return (
        <div className="border-[2px] border-[#eae9ee] rounded p-10 accountDisplay capitalize max-w-lg m-auto">
            <h6> Admin Prefrences : </h6>
            <form className="mt-10">
                <label> Choose model: </label><br />
                <select className="p-5 mt-5 w-full rounded cursor-pointer">
                    <option value="light"> Model one </option>
                    <option value="dark">  Model two </option>
                </select><br />
                <PrimaryButton type="submit" classes="capitalize w-full mt-10"> Save Changes </PrimaryButton>
                <PrimaryButton type="submit" classes="capitalize w-full mt-10"> Revert to default </PrimaryButton>
            </form>
        </div>
    )
}
export default PrefrencesDisplay
;