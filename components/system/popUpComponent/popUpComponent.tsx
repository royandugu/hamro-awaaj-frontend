import { useContext } from "react";
import context from "../context/context";


const PopUpComponent=({component}:{component:JSX.Element})=>{
    const contextContainer=useContext(context);
    
    return(
        <>
            <div className="fixed top-1/3 left-1/3 m-auto z-10 rounded shadow bg-white p-10">
                {component}
            </div>
            <div className="fixed inset-0 z-9 bg-[rgba(0,0,0,.5)]" onClick={()=>contextContainer.setPopUpNumber(-1)}/>
        </>
    )
}
export default PopUpComponent;