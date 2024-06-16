const RoundIcons = ({ icon, classes }: { icon: any, classes:string }) => {
    return (
        <div className={`p-3 border border-[#e7e7e7] rounded-full ${classes}`}>
            {icon}
        </div>
    )
}

export default RoundIcons;