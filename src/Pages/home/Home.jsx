import React from 'react'
import './Home.css'
import img1 from '../../Img/1.jpg'
import img2 from '../../Img/2.jpg'
import img3 from '../../Img/3.jpg'
import img4 from '../../Img/4.jpg'
import img5 from '../../Img/5.jpg'
import Products from '../Trend_Spad/Products/Products'
import Project_Details from '../Product_Details/Project_Details'


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

                                {/* Top Row - 2 Boxes */}
                                <div className="w-1/2 p-1"> {/* Adjust width to 1/2 for two boxes on top */}
                                    <div
                                        className="categories__item bg-cover bg-center"
                                        style={{ backgroundImage: `url(${img2})` }}
                                    >
                                        <div className="categories__text">
                                            <h4 className="text-xl font-semibold mb-2">Men’s fashion</h4>
                                            <p className="mb-2">358 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">
                                                Shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/2 p-1">
                                    <div
                                        className="categories__item bg-cover bg-center"
                                        style={{ backgroundImage: `url(${img3})` }}
                                    >
                                        <div className="categories__text">
                                            <h4 className="text-xl font-semibold mb-2">Motor Manufacturer</h4>
                                            <p className="mb-2">273 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">
                                                Shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Row - 4 Boxes */}
                                <div className="w-1/4 p-1"> {/* Adjust width to 1/4 for four boxes on bottom */}
                                    <div
                                        className="categories__item bg-cover bg-center"
                                        style={{ backgroundImage: `url(${img4})` }}
                                    >
                                        <div className="categories__text">
                                            <h4 className="text-xl font-semibold mb-2">Industrial Motor</h4>
                                            <p className="mb-2">159 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">
                                                Shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/4 p-1">
                                    <div
                                        className="categories__item bg-cover bg-center"
                                        style={{ backgroundImage: `url(${img5})` }}
                                    >
                                        <div className="categories__text">
                                            <h4 className="text-xl font-semibold mb-2">Geared Motor</h4>
                                            <p className="mb-2">792 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">
                                                Shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/4 p-1">
                                    <div
                                        className="categories__item bg-cover bg-center"
                                        style={{ backgroundImage: `url(${img2})` }}
                                    >
                                        <div className="categories__text">
                                            <h4 className="text-xl font-semibold mb-2">Men’s fashion</h4>
                                            <p className="mb-2">358 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">
                                                Shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/4 p-1">
                                    <div
                                        className="categories__item bg-cover bg-center"
                                        style={{ backgroundImage: `url(${img2})` }}
                                    >
                                        <div className="categories__text">
                                            <h4 className="text-xl font-semibold mb-2">Men’s fashion</h4>
                                            <p className="mb-2">358 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">
                                                Shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Products SectionTitle="Today's Deal" />
            <Products SectionTitle="Best Seller" />
            {/* <Project_Details/> */}
        </>
    )
}
