const PrimaryButton=({text, customColor, classes}:{text:string, customColor?:string, classes?:string})=>{
    return(
        <button className={`py-5 px-10 opacity-75 rounded hover:opacity-100 bg-${customColor ?? 'primary text-white'} ${classes} font-bold uppercase`}>{text}</button>
    )
}

export default PrimaryButton;