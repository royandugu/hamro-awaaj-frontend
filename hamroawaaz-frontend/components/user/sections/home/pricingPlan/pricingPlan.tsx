import PrimaryButton from "../../../../system/primaryButton/primaryButton";

const pricingPlans=[
    {
        title:"Personal",
        price:"500 rs/month",
        list:[
            "home service",
            "all other",
            "lorem",
            "ipsum",
            "dolor"
        ]
    },
    {
        title:"Family",
        price:"600 rs/month",
        list:[
            "home service",
            "all other",
            "lorem",
            "ipsum",
            "dolor"
        ]
    },
    {
        title:"Package",
        price:"700 rs/month",
        list:[
            "home service",
            "all other",
            "lorem",
            "ipsum",
            "dolor"
        ]
    }
]


const PricingPlan=()=>{
    return(
        <section className="normalSection flex flex-col items-center">
            <h2> <span className="text-primary">Pricing</span> <span className="text-secondary">Plan</span> </h2>
            <p className="max-w-3xl text-center"> There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available </p>
        
            <div className="flex w-full gap-10 pricingContainer">
                {pricingPlans.map((plans,index)=>(
                    <div className={`w-1/3 shadow-lg mt-20 ${index===1 && 'scale-110'}`} key={index}>
                        <div className="bg-primary text-center p-10 text-white">
                            <h5> {plans.title} </h5>
                            <h2 className="mt-5"> {plans.price} </h2>
                        </div>
                        <div className="p-10 text-center">
                            {plans.list.map((ll,index)=>(
                                <p key={index}> {ll} </p>
                            ))}
                            <div className="mt-10"/>
                            <PrimaryButton text="Subscribe" customColor="primary"/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default PricingPlan;