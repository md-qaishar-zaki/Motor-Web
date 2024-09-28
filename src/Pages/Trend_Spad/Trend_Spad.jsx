import React from 'react'

export default function Trend_Spad({ ImgName, ProductTitle, Price, stars }) {
    return (
        <div className="trend__item flex flex-col">
            <div className="trend__item__pic">
                <img src={ImgName} alt="Electric Motor 2/3/5 HP Standard IS" className="w-full h-auto rounded-lg" />
            </div>
            <div className="trend__item__text mt-2">
                <h6 className="text-lg font-semibold">{ProductTitle}</h6>
                <div className="rating flex items-center mt-1">
                    {[...Array(stars)].map((_, index) => (
                        <i key={index} className="fa fa-star text-yellow-400"></i>
                    ))}
                </div>
                <div className="flex items-center">
                    <div className="product__price text-lg font-bold w-full">₹ {Price}</div>
                    <ul class="product__hover">
                        <li><a href="img/product/product-2.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
