import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";

const UpArrow = () => {
    return (
        <section className="p-0">
            <Link href="#header" className="bg-primary p-5 rounded-full fixed right-[40px] bottom-[40px] opacity-75 hover:opacity-100">
                <FaArrowUp className="text-white text-[20px] sm:text-[30px]" />
            </Link>
        </section>
    )
}

export default UpArrow;