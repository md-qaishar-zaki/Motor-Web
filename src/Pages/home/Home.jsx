import React, { useState, useEffect } from 'react';
import './Home.css';
import Products from '../../Components/Products/Products.jsx';

export default function Home() {
    const [bannerimg, setBannerImg] = useState([]);

    useEffect(() => {
        const fetchBannerImg = async () => {
            try {
                const response = await fetch('/machintools/public/api/getbannerlist');
                const data = await response.json();
                setBannerImg(data);
            } catch (error) {
                console.error('Error fetching banner images:', error);
            }
        };

        fetchBannerImg();
    }, []);

    const getFullImageUrl = (path) => {
        if (typeof path === 'string' && path.startsWith('http')) {
            return path; // Return full URL if it's already absolute
        }
        return `https://siyabling.com/machintools/public${path}`; // Prepend base URL
    };

    return (
        <>
            <section className="categories">
                <div className="container-fluid px-0">
                    <div className="flex flex-wrap">

                        <div className="w-full lg:w-1/2 p-0">
                            {bannerimg.length > 0 && (
                                <div
                                    className="categories__item categories__large__item bg-cover bg-center"
                                    style={{ backgroundImage: `url(${getFullImageUrl(bannerimg[0].photo)})` }}
                                >
                                    <div className="categories__text p-8">
                                        <h1 className="text-3xl font-bold mb-4">{bannerimg[0].title}</h1>
                                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: bannerimg[0].description }} />
                                        <a className="text-lg font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-wrap">

                                {/* Top Row - 2 Boxes */}
                                <div className="w-1/2 p-1">
                                    {bannerimg.length > 1 && (
                                        <div
                                            className="categories__item bg-cover bg-center relative overflow-hidden"
                                            style={{ backgroundImage: `url(${getFullImageUrl(bannerimg[1].photo)})` }}
                                        >
                                            <div className="categories__text">
                                                <h4 className="text-xl font-semibold mb-2">{bannerimg[1].title}</h4>
                                                <p className="mb-2" dangerouslySetInnerHTML={{ __html: bannerimg[1].description }} />
                                                <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="w-1/2 p-1">
                                    {bannerimg.length > 2 && (
                                        <div
                                            className="categories__item bg-cover bg-center relative overflow-hidden"
                                            style={{ backgroundImage: `url(${getFullImageUrl(bannerimg[2].photo)})` }}
                                        >
                                            <div className="categories__text">
                                                <h4 className="text-xl font-semibold mb-2">{bannerimg[2].title}</h4>
                                                <p className="mb-2" dangerouslySetInnerHTML={{ __html: bannerimg[2].description }} />
                                                <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Row - 4 Boxes */}
                                <div className="w-1/4 p-1">
                                    <div
                                        className="categories__item bg-cover bg-center relative overflow-hidden"
                                        style={{ backgroundImage: `url(${getFullImageUrl(bannerimg[3]?.photo)})` }}
                                    >
                                        <div className="categories__text hideText">
                                            <h4 className="text-xl font-semibold mb-2">{bannerimg[3]?.title || 'Industrial Motor'}</h4>
                                            <p className="mb-2" dangerouslySetInnerHTML={{ __html: bannerimg[3]?.description || '159 items' }} />
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/4 p-1">
                                    <div
                                        className="categories__item bg-cover bg-center relative overflow-hidden"
                                        style={{ backgroundImage: `url(${getFullImageUrl(bannerimg[4]?.photo)})` }}
                                    >
                                        <div className="categories__text hideText">
                                            <h4 className="text-xl font-semibold mb-2">{bannerimg[4]?.title || 'Geared Motor'}</h4>
                                            <p className="mb-2" dangerouslySetInnerHTML={{ __html: bannerimg[4]?.description || '792 items' }} />
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/4 p-1">
                                    <div
                                        className="categories__item bg-cover bg-center relative overflow-hidden"
                                        style={{ backgroundImage: `url(${getFullImageUrl(bannerimg[5]?.photo)})` }}
                                    >
                                        <div className="categories__text hideText">
                                            <h4 className="text-xl font-semibold mb-2">{bannerimg[5]?.title || 'Men’s fashion'}</h4>
                                            <p className="mb-2" dangerouslySetInnerHTML={{ __html: bannerimg[5]?.description || '358 items' }} />
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/4 p-1">
                                    <div
                                        className="categories__item bg-cover bg-center relative overflow-hidden"
                                        style={{ backgroundImage: `url(${getFullImageUrl(bannerimg[6]?.photo)})` }}
                                    >
                                        <div className="categories__text hideText">
                                            <h4 className="text-xl font-semibold mb-2">{bannerimg[6]?.title || 'Men’s fashion'}</h4>
                                            <p className="mb-2" dangerouslySetInnerHTML={{ __html: bannerimg[6]?.description || '358 items' }} />
                                            <a className="text-base font-semibold text-white bg-black py-2 px-4">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Products />
        </>
    );
}