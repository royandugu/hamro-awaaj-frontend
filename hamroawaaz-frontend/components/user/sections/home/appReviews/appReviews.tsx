"use client"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppReviews = () => {
 
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <section className="normalSection flex flex-col items-center">
            <h2 className="text-center"> App <span className=" text-secondary">Reviews</span> </h2>
            <p className="max-w-3xl text-center"> There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available </p>
            <div className="w-full mt-20">
                <Slider {...settings}>
                    {[1, 2, 3, 4, 5, 6].map(cnt => (
                        <div className="w-full" key={cnt}>
                            <div className="flex justify-center">
                                <img src="https://torres-react.pages.dev/static/media/1.4eaec6c30bd39e0edd14.png" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
export default AppReviews;