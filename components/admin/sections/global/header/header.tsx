import { Dispatch, SetStateAction } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";

import Link from "next/link";

const Header = ({ setSidebarOpen }: { setSidebarOpen?: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"

            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden"
            onClick={() => setSidebarOpen ? setSidebarOpen(true) : ""}>
            <RxHamburgerMenu size={30} />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
          </Link>
        </div>

        <div className="w-full">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="float-right">
              <Link href="/admin/settings/account" className="mt-0">
                <span className="flex gap-2 h-[35px] w-[35px] rounded-full justify-center items-center">
                  <span className="flex gap-2 items-center">
                    <FaRegUserCircle size={25} />
                  </span>
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
