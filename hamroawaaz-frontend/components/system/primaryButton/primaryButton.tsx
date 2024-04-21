const PrimaryButton=({text, customColor}:{text:string, customColor?:string})=>{
    return(
        <button className={`py-5 px-10 bg-${customColor ?? 'secondary'} font-bold text-white uppercase text-[20px]`}>{text}</button>
    )
}

export default PrimaryButton;