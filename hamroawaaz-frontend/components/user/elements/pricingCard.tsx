const PricingCard=({cardTitle,price, features}:{cardTitle:string, price:string,features: Array<string>})=>{
    return(
        <div className="shadow">
            <div className="bg-primary text-center py-5 px-10">
                <h2> {cardTitle} </h2>
            </div>
        </div>
    )
}
export default PricingCard;