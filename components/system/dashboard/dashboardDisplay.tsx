import CardOne from "./cards/cardOne";
import CardTwo from './cards/cardTwo';
import CardThree from './cards/cardThree';
import CardFour from './cards/cardFour';

import ChartOne from './charts/chartOne';
import ChartTwo from './charts/chartTwo';
import ChartThree from './charts/chartThree';

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
        {(typeof window !== 'undefined') &&
          <>
            <ChartOne />
            <ChartTwo />
            <ChartThree />
          </>
        }
      </div>
    </>
  );
};

export default DashboardDisplay;
