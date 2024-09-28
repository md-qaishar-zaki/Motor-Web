import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <>
            <section className="categories">
                <div className="container-fluid px-0">
                    <div className="flex flex-wrap">

                        <div className="w-full lg:w-1/2 p-0">
                            <div className="categories__item categories__large__item bg-cover bg-center" >
                                <div className="categories__text p-8">
                                    <h1 className="text-3xl font-bold mb-4">Women’s fashion</h1>
                                    <p className="mb-4">Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</p>
                                    <a className="text-lg font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-wrap">

                                <div className="w-full md:w-1/2 p-0">
                                    <div className="categories__item bg-cover bg-center" >
                                        <div className="categories__text p-4">
                                            <h4 className="text-xl font-semibold mb-2">Men’s fashion</h4>
                                            <p className="mb-2">358 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 p-0">
                                    <div className="categories__item bg-cover bg-center" >
                                        <div className="categories__text p-4">
                                            <h4 className="text-xl font-semibold mb-2">Kid’s fashion</h4>
                                            <p className="mb-2">273 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 p-0">
                                    <div className="categories__item bg-cover bg-center" >
                                        <div className="categories__text p-4">
                                            <h4 className="text-xl font-semibold mb-2">Cosmetics</h4>
                                            <p className="mb-2">159 items</p>
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 p-0">
                                    <div className="categories__item bg-cover bg-center" >
                                        <div className="categories__text p-4">
                                            <h4 className="text-xl font-semibold mb-2">Accessories</h4>
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
        </>
    )
}
