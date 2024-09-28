import React from 'react'
import './Home.css'
import Button from '../../Components/Button.jsx'
import img1 from '../../Img/1.jpg'
import img2 from '../../Img/2.jpg'
import img3 from '../../Img/3.jpg'
import img4 from '../../Img/4.jpg'
import img5 from '../../Img/5.jpg'
import Trend_Spad from '../Trend_Spad/Trend_Spad'
import motor1 from '../../Img/motor1.jpeg'
import motor2 from '../../Img/motor2.jpeg'
import motor3 from '../../Img/motor3.jpeg'
import motor4 from '../../Img/motor4.jpeg'
import motor5 from '../../Img/5.jpg'


export default function Home() {
    return (
        <>
            <section className="categories">
                <div className="container-fluid px-0">
                    <div className="flex flex-wrap">

                        <div className="w-full lg:w-1/2 p-0">
                            <div className="categories__item categories__large__item bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
                                <div className="categories__text p-8">
                                    <h1 className="text-3xl font-bold mb-4">Electric motor</h1>
                                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur pariatur aliquid officiis vitae omnis nemo hic, nostrum velit quibusdam corrupti?</p>
                                    <a className="text-lg font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-wrap">

                                <div className="w-full md:w-1/2 p-0">
                                    <div className="categories__item bg-cover bg-center" style={{ backgroundImage: `url(${img2})` }} >
                                        <div className="categories__text">
                                            <h4 className="text-xl font-semibold mb-2">Men’s fashion</h4>
                                            <p className="mb-2">358 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 p-0">
                                    <div className="categories__item bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}>
                                        <div className="categories__text">
                                            <h4 className="text-xl font-semibold mb-2">Motor Manufacturer</h4>
                                            <p className="mb-2">273 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 p-0">
                                    <div className="categories__item bg-cover bg-center" style={{ backgroundImage: `url(${img4})` }}>
                                        <div className="categories__text">
                                            <h4 className="text-xl font-semibold mb-2">Industrial Motor</h4>
                                            <p className="mb-2">159 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 p-0">
                                    <div className="categories__item bg-cover bg-center" style={{ backgroundImage: `url(${img5})` }}>
                                        <div className="categories__text">
                                            <h4 className="text-xl font-semibold mb-2">Geared Motor</h4>
                                            <p className="mb-2">792 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-4">
                <div className="mt-12">
                    <div className="flex w-full justify-between px-10">
                        {['Hot Trend'].map((title, index) => (
                            <div key={index} className="trend__content">
                                <div className="section-title mb-4">
                                    <h4 className="text-xl font-bold">{title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap w-full px-4 mb-8">
                        {[
                            { ProductTitle: 'Electric Motor 2/3/5 HP Standard IS...', ImgName: motor1, Price: `5,499`, stars: 2 },
                            { ProductTitle: 'VEVOR 3 Phase Electric Mo...', ImgName: motor2, Price: `6,299`, stars: 4 },
                            { ProductTitle: 'Single Phase Electric Motor ...', ImgName: motor3, Price: `9,999`, stars: 5 },
                            { ProductTitle: 'AC motor', ImgName: motor4, Price: `10,199`, stars: 3 },
                        ].map((product, index) => (
                            <div key={index} className="trend__content w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                                <Trend_Spad
                                    ProductTitle={product.ProductTitle}
                                    ImgName={product.ImgName}
                                    Price={product.Price}
                                    stars={product.stars}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Button Name={'View More'} />
                    </div>
                </div>
                <div className="mt-12">
                    <div className="flex w-full justify-between px-10">
                        {['Best Seller'].map((title, index) => (
                            <div key={index} className="trend__content">
                                <div className="section-title mb-4">
                                    <h4 className="text-xl font-bold">{title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap w-full px-4 mb-8">
                        {[
                            { ProductTitle: 'Electric Motor 2/3/5 HP Standard IS...', ImgName: motor1, Price: `5,499`, stars: 2 },
                            { ProductTitle: 'VEVOR 3 Phase Electric Mo...', ImgName: motor2, Price: `6,299`, stars: 4 },
                            { ProductTitle: 'Single Phase Electric Motor ...', ImgName: motor3, Price: `9,999`, stars: 5 },
                            { ProductTitle: 'AC motor', ImgName: motor4, Price: `10,199`, stars: 3 },
                        ].map((product, index) => (
                            <div key={index} className="trend__content w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                                <Trend_Spad
                                    ProductTitle={product.ProductTitle}
                                    ImgName={product.ImgName}
                                    Price={product.Price}
                                    stars={product.stars}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Button Name={'View More'} />
                    </div>
                </div>

                <div className="mt-12">
                    <div className="flex w-full justify-between px-10">
                        {['Feature'].map((title, index) => (
                            <div key={index} className="trend__content">
                                <div className="section-title mb-4">
                                    <h4 className="text-xl font-bold">{title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap w-full px-4 mb-8">
                        {[
                            { ProductTitle: 'Electric Motor 2/3/5 HP Standard IS...', ImgName: motor1, Price: `5,499`, stars: 2 },
                            { ProductTitle: 'VEVOR 3 Phase Electric Mo...', ImgName: motor2, Price: `6,299`, stars: 4 },
                            { ProductTitle: 'Single Phase Electric Motor ...', ImgName: motor3, Price: `9,999`, stars: 5 },
                            { ProductTitle: 'AC motor', ImgName: motor4, Price: `10,199`, stars: 3 },
                        ].map((product, index) => (
                            <div key={index} className="trend__content w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                                <Trend_Spad
                                    ProductTitle={product.ProductTitle}
                                    ImgName={product.ImgName}
                                    Price={product.Price}
                                    stars={product.stars}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Button Name={'View More'} />
                    </div>
                </div>
                <div className="mt-1">
                    <div className="flex w-full justify-between px-10">
                        {['Best Brand'].map((title, index) => (
                            <div key={index} className="trend__content">
                                <div className="section-title mb-4">
                                    <h4 className="text-xl font-bold">{title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap w-full px-4 mb-8">
                        {[
                            { ProductTitle: 'Electric Motor 2/3/5 HP Standard IS...', ImgName: motor1, Price: `5,499`, stars: 2 },
                            { ProductTitle: 'VEVOR 3 Phase Electric Mo...', ImgName: motor2, Price: `6,299`, stars: 4 },
                            { ProductTitle: 'Single Phase Electric Motor ...', ImgName: motor3, Price: `9,999`, stars: 5 },
                            { ProductTitle: 'AC motor', ImgName: motor4, Price: `10,199`, stars: 3 },
                        ].map((product, index) => (
                            <div key={index} className="trend__content w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                                <Trend_Spad
                                    ProductTitle={product.ProductTitle}
                                    ImgName={product.ImgName}
                                    Price={product.Price}
                                    stars={product.stars}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Button Name={'View More'} />
                    </div>
                </div>
            </div>
        </>
    )
}
