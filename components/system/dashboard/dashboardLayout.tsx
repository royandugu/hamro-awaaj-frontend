"use client"

import { useState } from 'react';

import Header from './header';

import Sidebar from './sidebar';

const DashboardLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header/>
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
            </div>
          </main>
          <footer/>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
