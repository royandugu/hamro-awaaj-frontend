import { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const SmallMenuDesign = ({ setIsSmallMenuOpen }: { setIsSmallMenuOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <>
            <div className="flex justify-end p-10 border-b-[2px] border-[#e7e7e7]">
                <RxCross2 size={30} className="text-white cursor-pointer" onClick={() => setIsSmallMenuOpen(false)} />
            </div>
            <ul className="flex flex-col p-10">
                <Link href="#" className="mt-0 text-white hover:text-primary"> Home </Link>
                <Link href="#" className="mt-5 text-white hover:text-primary"> About </Link>
                <Link href="#" className="mt-5 text-white hover:text-primary"> Services </Link>
                <Link href="#" className="mt-5 text-white hover:text-primary"> Contact </Link>
                <Link href="#" className="mt-5 text-white hover:text-primary"> Account </Link>
            </ul>
        </>
    )
}
export default SmallMenuDesign;