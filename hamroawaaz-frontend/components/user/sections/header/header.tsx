import { IoSearchOutline } from "react-icons/io5";
import {RxHamburgerMenu} from "react-icons/rx";
import Logo from "../../../../public/logo.png";
import Image from "next/image";

const ClientHeader=()=>{
    return(
        <header className="py-5 pl-[10%] pr-[10%] flex justify-between items-center z-9 shadow-xl">
            <Image src={Logo} alt="Logo" height={100} width={100}/>
            
        </header> 
    )
}
export default ClientHeader;  