"use client"

import { useState } from 'react';

import Header from '../../../sections/global/header/header';
import Sidebar from '../../../sections/global/sidebar/sidebar';

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <div className="max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          {children}
        </div>
        <footer />
      </div>
    </section>

  );
}


export default DashboardLayout;
