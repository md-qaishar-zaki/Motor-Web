import React, { useState, useEffect } from 'react'
import Trend_Spad from '../../Trend_Spad/Trend_Spad.jsx'
import motor1 from '../../../Img/motor1.jpeg'
import motor2 from '../../../Img/motor2.jpeg'
import motor3 from '../../../Img/motor3.jpeg'
import motor4 from '../../../Img/motor4.jpeg'
import Button from '../../../Components/Button.jsx'

export default function Products({SectionTitle}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [
        { ProductTitle: 'Electric Motor 2/3/5 HP Standard IS...', ImgName: motor1, Price: `5,499`, stars: 2 },
        { ProductTitle: 'VEVOR 3 Phase Electric Mo...', ImgName: motor2, Price: `6,299`, stars: 4 },
        { ProductTitle: 'Single Phase Electric Motor ...', ImgName: motor3, Price: `9,999`, stars: 5 },
        { ProductTitle: 'AC motor', ImgName: motor4, Price: `10,199`, stars: 3 },
        { ProductTitle: 'Electric Motor 2/3/5 HP Standard IS...', ImgName: motor1, Price: `5,499`, stars: 2 },
        { ProductTitle: 'VEVOR 3 Phase Electric Mo...', ImgName: motor2, Price: `6,299`, stars: 4 },
        { ProductTitle: 'Single Phase Electric Motor ...', ImgName: motor3, Price: `9,999`, stars: 5 },
        { ProductTitle: 'AC motor', ImgName: motor4, Price: `10,199`, stars: 3 },
    ];
    const visibleProducts = 4;
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - visibleProducts ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - visibleProducts : prevIndex - 1
        );
    };
    return (
        <div className="container mx-auto px-4">
            <div className="mt-5">
                <div className="flex w-full justify-between px-3">
                    <div className="trend__content">
                        <div className="section-title">
                            <h4 className="text-xl font-bold">{SectionTitle}</h4>
                        </div>
                    </div>
                </div>
                <div className="relative container mx-auto overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
                    >
                        {products.map((product, index) => (
                            <div key={index} className="w-1/4 flex-shrink-0">
                                <Trend_Spad
                                    ProductTitle={product.ProductTitle}
                                    ImgName={product.ImgName}
                                    Price={product.Price}
                                    stars={product.stars}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-dark"
                    >
                        <i class="bi-caret-left-square"></i>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-dark"
                    >
                        <i class="bi-caret-right-square"></i>
                    </button>
                </div>
                <div className="text-center">
                    <Button Name={'View More'} />
                </div>
            </div>
        </div>
    )
}
