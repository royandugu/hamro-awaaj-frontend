"use client"

import { useEffect, useContext } from "react";

import context from "../../../system/context/context";
import dynamic from 'next/dynamic';

import CardOne from "../../../system/components/dashboard/cards/cardOne";
import CardTwo from '../../../system/components/dashboard/cards/cardTwo';
import CardThree from '../../../system/components/dashboard/cards/cardThree';
import CardFour from '../../../system/components/dashboard/cards/cardFour';


const ChartOne = dynamic(() => import('../../../system/components/dashboard/charts/chartOne'), {
  ssr: false,
});
const ChartTwo = dynamic(() => import('../../../system/components/dashboard/charts/chartTwo'), {
  ssr: false,
});
const ChartThree = dynamic(() => import('../../../system/components/dashboard/charts/chartTwo'), {
  ssr: false,
});

const DashboardDisplay = () => {
  const contextContainer=useContext(context);

  useEffect(()=>{
    contextContainer.setPopUpNumber(-1);
  },[])

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
