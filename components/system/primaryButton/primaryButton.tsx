const PrimaryButton=({type,text, customColor, classes}:{type?:"submit" | "reset" | "button" | undefined, text:string, customColor?:string, classes?:string})=>{
    return(
        <button type={type ?? "submit"} className={`py-5 px-10 opacity-75 rounded hover:opacity-100 uppercase bg-${customColor ?? 'primary text-white'} ${classes} font-bold`}>{text}</button>
    )
}

export default PrimaryButton;