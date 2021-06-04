import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/ProductSlider.scss'

function ProductSlider() {
    const settings =  {
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2500,
        cssEase: "linear"
    };

    return (
        <div className="slider">
        <Slider {...settings}>
          <div>
            <div className="card">
                <img src="/nike1.jpg" alt=''/>
            </div>
          </div>
          <div>
            <div className="card card-1">
            <img src="/puma.jpg" alt=''/>
            </div>
          </div>
          <div>
            <div className=" card card-2">
            <img src="/nike2.jpg" alt=''/>
            </div>
          </div>
        </Slider>
      </div>
    )
}

export default ProductSlider
