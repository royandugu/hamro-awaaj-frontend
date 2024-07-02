
import CardOne from "../../../system/components/dashboard/cards/cardOne";
import CardTwo from "../../../system/components/dashboard/cards/cardTwo";
import CardThree from "../../../system/components/dashboard/cards/cardThree";
import CardFour from "../../../system/components/dashboard/cards/cardFour";

import dynamic from "next/dynamic";

const ChartOne = dynamic(() => import('../../../system/components/dashboard/charts/chartOne'), {
    ssr: false,
});
const ChartTwo = dynamic(() => import('../../../system/components/dashboard/charts/chartTwo'), {
    ssr: false,
});
 
const Dashboard = () => {
    return (
        <section className="haSection pt-10 pb-20">
            <div className="flex gap-10">
                <div className="w-1/4">
                    <CardOne />
                </div>
                <div className="w-1/4">
                    <CardTwo />
                </div>

                <div className="w-1/4">
                    <CardThree />
                </div>

                <div className="w-1/4">
                    <CardFour />
                </div>
            </div>
            <div className="flex gap-10 mt-10">
                <div className="w-2/3">
                    <ChartOne />
                </div>
                <div className="w-1/3">
                    <ChartTwo />
                </div>
            </div>
        </section>
    )
}

export default Dashboard;