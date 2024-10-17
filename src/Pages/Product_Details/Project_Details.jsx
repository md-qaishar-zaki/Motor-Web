import React, { useEffect, useState } from 'react';
import './Product_Details.css';
import { useParams } from 'react-router-dom';
import RatingsReviews from '../../Components/Ratings_&_Reviews/Ratings_&_Reviews.jsx';
import QNA from '../../Components/QNA/QNA.jsx';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts.jsx';
import TopSellignList from '../../Components/Top-Selling-List/Top_Sellign_List.jsx'

export default function Project_Details() {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const PrvPrice = 100;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/machintools/public/api/getproductbyid/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const productData = await response.json();
                setProduct(productData);
            } catch (error) {
                console.error('Failed to fetch product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    function changeImage(src) {
        document.getElementById('mainImage').src = src;
    }

    return (
        <div>
            <section className="py-5 pt-2">
                <div className="container mx-auto">
                    <div className="flex flex-wrap ProductDetails py-5">
                        <aside className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                            <div className="ProductIMG w-full h-auto rounded-lg shadow-md mb-4">
                                <img id="mainImage" src={product.ImgName} alt={product.ProductTitle} />
                            </div>
                            <div className="flex gap-4 py-4 justify-center overflow-x-auto ProductIMGList">
                                {product.ImageList && product.ImageList.length > 0 ? (
                                    product.ImageList.map((imgSrc, index) => (
                                        <img
                                            key={index}
                                            src={imgSrc}
                                            alt={product.ProductTitle}
                                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                            onClick={() => changeImage(imgSrc)}
                                        />
                                    ))
                                ) : (
                                    <div>No images available</div> // Optional: Handle the case when there are no images
                                )}
                            </div>
                        </aside>
                        <main className="w-full lg:w-1/2 px-4">
                            <div>
                                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                                    {product.product.title}
                                    {console.log(product)}
                                </h4>
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="flex items-center stars">
                                        {[...Array(product.stars)].map((_, index) => (
                                            <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                            </svg>
                                        ))}
                                        <span className="ml-1 text-gray-700">{product.stars}</span>
                                    </div>
                                    <span className="text-gray-500"><i className="fa fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                    <span className="text-green-500">{product.product.stock} stock</span>
                                </div>
                                <hr className="my-4" />
                                <div className="flex items-center mb-3">
                                    <span className="text-gray-500">Sold by:</span>
                                    <span className="ml-2 font-semibold">Inhouse product</span>
                                    <img className="ml-4 h-6" src="https://cdn.freelogovectors.net/wp-content/uploads/2020/09/crompton-logo.png" alt="HONDA" />
                                </div>
                                <hr className="my-4" />
                                <div className="text-xl text-gray-800 mb-3">
                                    <table className="table-auto text-sm border-separate border-spacing-2">
                                        <tbody>
                                            <tr>
                                                <td>Price:</td>
                                                <td><del>₹{product.product.price}</del></td>
                                            </tr>
                                            <tr>
                                                <td>Discount Price:</td>
                                                <td className='Price'>₹{product.product.purchase_price}</td>
                                            </tr>
                                            <tr>
                                                <td>SKU:</td>
                                                <td>{product.product.sku}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    {product.Description}
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className='w-24'>
                                        <label className="block mb-2 text-gray-600">Quantity</label>
                                        <div className="flex items-center border bg-white border-gray-300 rounded-md">
                                            <button className="px-3 py-2 text-gray-600"><i className="fa fa-minus"></i></button>
                                            <input type="text" className="w-12 text-center border-l border-r border-gray-300" value="4" readOnly />
                                            <button className="px-3 py-2 text-gray-600"><i className="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-1 flex flex-col md:flex-row mb-3">
                                    <div className="flex items-center media_box flex-col space-x-2 mb-4 md:mb-0">
                                        <img src="https://yantratools.com/public/uploads/easy-return.png" className="w-6 h-6" alt="7 Days Returnable" />
                                        <p className="text-sm text-gray-600">7 Days Returnable</p>
                                    </div>
                                    <div className="flex items-center media_box flex-col space-x-2 mb-4 md:mb-0">
                                        <img src="https://yantratools.com/public/uploads/cod.png" className="w-6 h-6" alt="Pay on Delivery" />
                                        <p className="text-sm text-gray-600">Pay on Delivery</p>
                                    </div>
                                    <div className="flex items-center media_box flex-col space-x-2 mb-4 md:mb-0">
                                        <img src="https://yantratools.com/public/uploads/free-shipping.png" className="w-6 h-6" alt="Free Shipping" />
                                        <p className="text-sm text-gray-600">Free Shipping</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <button className="btn-primary">Add to cart</button>
                                    <button className="btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <div className="flex mt-5 flex-wrap product-desc-tab">
                <div className="w-full md:w-1/3">
                    <div className=" rounded seller-top-products-box bg-white sidebar-box mx-3 p-4 mb-3">
                        <h6 className='text-xm font-semibold'>Top Selling Products From This Seller</h6>
                        <TopSellignList />
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <div className=" bg-white rounded overflow-hidden ms-0 mx-3">
                        <div className="tabs">
                            <ul className="flex justify-center sticky p-3 border-b-2 bg-white">
                                <li className="nav-item">
                                    <a href="#tab_default_1" className="nav-link text-uppercase font-semibold active show">Description</a>
                                </li>
                            </ul>

                            <div className="tab-content pt-0">
                                <div className="tab-pane active show" id="tab_default_1">
                                    <div className="py-2 px-4">
                                        <div className="flex flex-wrap">
                                            <div className="w-full">
                                                <div className="overflow-hidden aiz-product-description">
                                                    <div className="product_content">
                                                        <p><b><span className="text-sm">{product.product.description}</span></b></p>
                                                        <p><b><span className="text-sm">{product.product.meta_title}:</span></b></p>
                                                        <ul className="list-disc pl-5">
                                                            <li><span className="text-sm">{product.product.meta_description}</span></li> 
                                                        </ul>
                                                        <p><b><span className="text-sm">Features:</span></b></p>
                                                        <ul className="list-disc pl-5">
                                                            <li><strong><span className="text-sm">Three 32-Liter Bins:</span></strong> Ideal for sorting and collecting different types of bio-medical waste.</li>
                                                            <li><strong><span className="text-sm">Durable Construction:</span></strong> Made from high-quality, easy-to-clean materials that resist odors and stains.</li>
                                                            <li><strong><span className="text-sm">Secure Frame:</span></strong> Provides stability and makes moving the bins hassle-free, ensuring safe and efficient waste management.</li>
                                                        </ul>
                                                        <p><b><span className="text-sm">Description:</span></b></p>
                                                        <p><span className="text-sm">{product.product.description}</span></p>
                                                        <div><br /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 mb-3 bg-white rounded overflow-hidden ms-0 mx-3">
                        <RatingsReviews />
                    </div>
                </div>
            </div>
            <QNA />
            <RelatedProducts />
        </div>
    );
}
