import { IoSearchOutline } from "react-icons/io5";

const clientHeader=()=>{
    return(
        <div className="fixed top-0 left-0 right-0 flex justify-between p-10 items-center">
            <h1 className="text-[20px]"> Logo </h1>
            <div className="flex gap-10 items-center">
                <ul className="flex justify-between gap-10 items-center">
                    <li> Menu 1 </li>
                    <li> Menu 2 </li>
                    <li> Menu 3 </li>
                    <li> Menu 4 </li>
                </ul>
                <IoSearchOutline size={30} />
            </div> 
        </div> 
    )
}
export default clientHeader;  