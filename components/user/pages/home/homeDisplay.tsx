import Banner from "../../sections/home/banner/banner";
import About from "../../sections/home/about/about";
import Services from "../../sections/home/services/services";
import UpArrow from "../../sections/global/upArrow/upArrow";

const HomeDisplay=()=>{
    return (
        <main>
            <Banner/>
            <About/>
            <Services/>
            <UpArrow/>
        </main>
    )
}
export default HomeDisplay;