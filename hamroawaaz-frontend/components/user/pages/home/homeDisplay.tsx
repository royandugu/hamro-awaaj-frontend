import Banner from "../../../system/banner/banner";
import About from "../../sections/about/about";
import EasyToCustomize from "../../sections/easyToCustomize/easyToCustomize";

const HomeDisplay=()=>{
    return (
        <main>
            <Banner title="Home page" route="Some route"/>
            <About/>
            <EasyToCustomize/>
        </main>
    )
}
export default HomeDisplay;