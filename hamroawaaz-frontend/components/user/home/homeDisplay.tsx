import Banner from "../../system/banner/banner";
import About from "../about/about";
import EasyToCustomize from "../easyToCustomize/easyToCustomize";

const HomeDisplay=()=>{
    return (
        <>
            <Banner title="Home page" route="Some route"/>
            <About/>
            <EasyToCustomize/>
        </>
    )
}
export default HomeDisplay;