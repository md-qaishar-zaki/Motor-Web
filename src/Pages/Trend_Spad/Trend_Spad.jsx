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
                    <ul className="product__hover">
                        <li><a href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg></a></li>
                        <li><a href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
