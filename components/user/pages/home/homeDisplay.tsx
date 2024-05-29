import Banner from "../../../system/banner/banner";
import About from "../../sections/home/about/about";
import Services from "../../sections/home/services/services";
import Contact from "../../sections/home/contact/contact";
// import About from "../../sections/home/about/about";
// import EasyToCustomize from "../../sections/home/easyToCustomize/easyToCustomize";
// import AwesomeFeatures from "../../sections/home/awesomeFeatures/awesomeFeatures";
// import LatestApp from "../../sections/home/latestApp/latestApp";
// import PricingPlan from "../../sections/home/pricingPlan/pricingPlan";
// import AppReviews from "../../sections/home/appReviews/appReviews";

const HomeDisplay=()=>{
    return (
        <main>
            <Banner title="Home page" route="Some route"/>
            <About/>
            <Services/>
        </main>
    )
}
export default HomeDisplay;