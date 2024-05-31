"use client"

import { useEffect, useState } from 'react';

import Header from './header';

import Sidebar from './sidebar';

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // useEffect(() => {
  //   if (typeof localStorage !== undefined) {
  //     const jwt = localStorage.getItem("jwt");
  //     if(jwt && jwt.length>0) setLoading(2);
  //     else setLoading(1); 
  //   }
  // }, [])

  
    return (
      <>
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>
            <footer />
          </div>
        </div>
      </>
    );
  }


export default DashboardLayout;
