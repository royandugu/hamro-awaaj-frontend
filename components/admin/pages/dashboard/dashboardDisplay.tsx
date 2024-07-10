"use client"

import { useEffect, useContext } from "react";
import { useSession } from "next-auth/react";
import { universalProtectedGet } from "../../../system/api/apiCallers";
import { useState } from "react";

import context from "../../../system/context/context";
import dynamic from 'next/dynamic';

import CardOne from "../../../system/components/dashboard/cards/cardOne";
import CardTwo from '../../../system/components/dashboard/cards/cardTwo';
import CardThree from '../../../system/components/dashboard/cards/cardThree';
import CardFour from '../../../system/components/dashboard/cards/cardFour';
import Spinner from "../../../system/sections/spinner/spinner";


const ChartOne = dynamic(() => import('../../../system/components/dashboard/charts/chartOne'), {
  ssr: false,
});
const ChartTwo = dynamic(() => import('../../../system/components/dashboard/charts/chartTwo'), {
  ssr: false,
});
const ChartThree = dynamic(() => import('../../../system/components/dashboard/charts/chartThree'), {
  ssr: false,
});

const DashboardDisplay = () => {
  const [loading, setLoading] = useState(true);

  const [state, setState] = useState<any>({
    series: [
      {
        name: '',
        data: [],
      }
    ],
  });

  const contextContainer = useContext(context);

  const session: any = useSession();


  useEffect(() => {
    const fetchLogs = async () => {
      const data = await universalProtectedGet("fetchImgLogData", session?.data?.accessToken);
      console.log(data);
      if(data){
      const firstObject = data.data?.[0];
      const valuesArray = Object.values(firstObject);


      setState({
        series: [
          {
            name: 'Conversion',
            data: valuesArray
          }
        ]
      });

      setLoading(false);
      }

    }

    if (session?.data?.accessToken) fetchLogs();
  }, [session])


  useEffect(() => {
    contextContainer.setPopUpNumber(-1);
  }, [])

  if (loading) return <Spinner />
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne state={state} />
        <ChartTwo state={state} />
      </div>
    </>
  );
};

export default DashboardDisplay;
