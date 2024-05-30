
import PrimaryButton from "../primaryButton/primaryButton";
import "./accountPage.css";
const AccountPage = () => {
    return (
        <section className="border-[2px] border-[#eae9ee] rounded p-10 accountDisplay capitalize max-w-lg m-auto">
            <h6> Account details : </h6>
            <form className="mt-10">
                <label> Full name : </label><br />
                <input type="text" className="rounded" /><br />
                <label> Age : </label><br />
                <input type="text" className="rounded" /><br />
                <label> Email : </label><br />
                <input type="text" className="rounded" /><br />
                <PrimaryButton type="submit" text="Update changes" classes="capitalize px-5 w-full" />
                <PrimaryButton text="Delete account" classes="capitalize mt-3 w-full text-white" customColor="[#1c2434]"/>
            </form>
        </section>
    )
}
export default AccountPage;