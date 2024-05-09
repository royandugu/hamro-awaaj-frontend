import { IoSearchOutline } from "react-icons/io5";
import {RxHamburgerMenu} from "react-icons/rx";

const ClientHeader=()=>{
    return(
        <header className="fixed bg-primary text-white left-0 right-0 py-10 pl-[10%] pr-[10%] lg:pl-[20%] lg:pr-[20%] flex justify-between items-center z-9">
            <h1 className="text-[20px]"> Logo </h1>
            <div className="flex gap-10 items-center">
                <ul className="hidden md:flex justify-between gap-10 items-center uppercase font-bold text-[12px]">
                    <li> Home </li>
                    <li> About </li>
                    <li> Features </li>
                    <li> Contact </li>
                </ul>
                <RxHamburgerMenu className="text-white md:hidden text-[25px] cursor-pointer"/>
                <IoSearchOutline size={30} />
            </div> 
        </header> 
    )
}
export default ClientHeader;  