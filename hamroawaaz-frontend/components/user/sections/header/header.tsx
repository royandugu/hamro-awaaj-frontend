import { IoSearchOutline } from "react-icons/io5";

const clientHeader=()=>{
    return(
        <div className="fixed bg-primary text-white left-0 right-0 py-10 pl-[20%] pr-[20%] flex justify-between items-center z-9">
            <h1 className="text-[20px]"> Logo </h1>
            <div className="flex gap-10 items-center">
                <ul className="flex justify-between gap-10 items-center uppercase font-bold text-[12px]">
                    <li> Home </li>
                    <li> About </li>
                    <li> Features </li>
                    <li> Contact </li>
                </ul>
                <IoSearchOutline size={30} />
            </div> 
        </div> 
    )
}
export default clientHeader;  