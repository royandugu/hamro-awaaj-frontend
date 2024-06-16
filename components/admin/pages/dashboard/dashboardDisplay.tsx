import CardOne from "../../components/cards/cardOne";
import CardTwo from '../../components/cards/cardTwo';
import CardThree from '../../components/cards/cardThree';
import CardFour from '../../components/cards/cardFour';

import dynamic from 'next/dynamic';

const ChartOne = dynamic(() => import('../../components/charts/chartOne'), {
  ssr: false,
});
const ChartTwo = dynamic(() => import('../../components/charts/chartTwo'), {
  ssr: false,
});
const ChartThree = dynamic(() => import('../../components/charts/chartTwo'), {
  ssr: false,
});

const DashboardDisplay = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default DashboardDisplay;
