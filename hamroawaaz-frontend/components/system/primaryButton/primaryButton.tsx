const PrimaryButton=({text, customColor, classes}:{text:string, customColor?:string, classes?:string})=>{
    return(
        <button className={`py-5 px-10 opacity-75 rounded-2xl hover:opacity-100 bg-${customColor ?? 'primary text-white'} ${classes} font-bold uppercase text-[20px]`}>{text}</button>
    )
}

export default PrimaryButton;