import Banner from "../../../system/banner/banner";
import About from "../../sections/about/about";
import EasyToCustomize from "../../sections/easyToCustomize/easyToCustomize";
import AwesomeFeatures from "../../sections/awesomeFeatures/awesomeFeatures";

const HomeDisplay=()=>{
    return (
        <main>
            <Banner title="Home page" route="Some route"/>
            <About/>
            <EasyToCustomize/>
            <AwesomeFeatures/>
        </main>
    )
}
export default HomeDisplay;