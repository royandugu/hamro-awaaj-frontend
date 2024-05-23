const PrimaryButton=({text, customColor, classes}:{text:string, customColor?:string, classes?:string})=>{
    return(
        <button className={`py-5 px-10 opacity-90 hover:opacity-100 bg-${customColor ?? 'primary'} ${classes} font-bold text-white uppercase text-[20px]`}>{text}</button>
    )
}

export default PrimaryButton;