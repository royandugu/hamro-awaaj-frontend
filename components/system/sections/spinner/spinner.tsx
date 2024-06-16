import Spinner2 from "../../../../public/spinner2.svg";
import Image from "next/image";

const Spinner=({noHeight}:{noHeight?:boolean})=>{
    return(
        <section className={`${noHeight ? '':'h-[100vh]'} w-full flex justify-center items-center`}>
            <Image src={Spinner2} alt="spinner"/>
        </section>
    )
} 
export default Spinner; 