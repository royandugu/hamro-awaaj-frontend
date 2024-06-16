import { useContext } from "react";

import context from "../../context/context";

const PopUpComponent=({component}:{component:JSX.Element})=>{
    const contextContainer=useContext(context);
    
    return(
        <>
            <div className="fixed bottom-0 left-0 right-0 max-h-[100vh] overflow-auto md:right-auto md:top-1/2 md:bottom-auto md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 m-auto z-10 rounded shadow bg-white p-10 h-auto">
                {component}
            </div> 
            <div className="fixed inset-0 z-9 bg-[rgba(0,0,0,.5)]" onClick={()=>contextContainer.setPopUpNumber(-1)}/>
        </>
    )
}
export default PopUpComponent;