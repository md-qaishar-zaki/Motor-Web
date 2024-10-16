import React from 'react';
import './Product_Details.css'
import { useParams } from 'react-router-dom';
import motor1 from '../../Img/motor1.jpeg';
import motor2 from '../../Img/motor2.jpeg';
import motor3 from '../../Img/motor3.jpeg';
import motor4 from '../../Img/motor4.jpeg';
import RatingsReviews from '../../Components/Ratings_&_Reviews/Ratings_&_Reviews.jsx';
import QNA from '../../Components/QNA/QNA.jsx';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts.jsx';
import TopSellignList from '../../Components/Top-Selling-List/Top_Sellign_List.jsx'

export default function Project_Details() {
    window.scrollTo(0, 0);
    const { id } = useParams(); // Get product ID from URL
    const PrvPrice = 100;
    const products = [
        { id: 1, ProductTitle: 'Electric Motor 2/3/5 HP Standard IS...', ImgName: motor1, Price: `5,499`, stars: 2 },
        { id: 2, ProductTitle: 'VEVOR 3 Phase Electric Mo...', ImgName: motor2, Price: `6,299`, stars: 4 },
        { id: 3, ProductTitle: 'Single Phase Electric Motor ...', ImgName: motor3, Price: `9,999`, stars: 5 },
        { id: 4, ProductTitle: 'AC motor', ImgName: motor4, Price: `10,199`, stars: 3 },
        { id: 5, ProductTitle: 'Electric Motor 2/3/5 HP Standard IS...', ImgName: motor1, Price: `5,499`, stars: 2 },
        { id: 6, ProductTitle: 'VEVOR 3 Phase Electric Mo...', ImgName: motor2, Price: `6,299`, stars: 4 },
        { id: 7, ProductTitle: 'Single Phase Electric Motor ...', ImgName: motor3, Price: `9,999`, stars: 5 },
        { id: 8, ProductTitle: 'AC motor', ImgName: motor4, Price: `10,199`, stars: 3 },
    ];

    const product = products.find((prod) => prod.id === parseInt(id));

    if (!product) {
        return <div>Product not found!</div>;
    }

    function changeImage(src) {
        document.getElementById('mainImage').src = src;
    }

    return (
        <div>
            <section className="py-5 pt-0">
                <div className="container mx-auto">
                    <div className="flex flex-wrap ProductDetails py-5">
                        <aside className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                            <div className="ProductIMG w-full h-auto rounded-lg shadow-md mb-4">
                                <img src={product.ImgName} alt={product.ProductTitle} />
                            </div>
                            <div className="flex gap-4 py-4 justify-center overflow-x-auto ProductIMGList">
                                <img src={product.ImgName} alt={product.ProductTitle} className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-100 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)" />
                                <img src={product.ImgName} alt={product.ProductTitle} className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)" />
                                <img src={product.ImgName} alt={product.ProductTitle} className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)" />
                                <img src={product.ImgName} alt={product.ProductTitle} className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)" />
                            </div>
                        </aside>
                        <main className="w-full lg:w-1/2 px-4">
                            <div>
                                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                                    {product.ProductTitle}
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
                                    <span className="text-green-500">In stock</span>
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
                                                <td> <del>₹{product.Price + PrvPrice}</del></td>
                                            </tr>
                                            <tr>
                                                <td>Discount Price:</td>
                                                <td className='Price'>₹{product.Price}</td>
                                            </tr>
                                            <tr>
                                                <td>SKU:</td>
                                                <td>HD-WP-0124-9019</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eligendi aliquam nostrum temporibus soluta vitae labore inventore aspernatur, quos nam.
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
                                        <img src="https://yantratools.com/public/uploads/trusted.png" className="w-6 h-6" alt="100% Quality Assurance" />
                                        <p className="text-sm text-gray-600">100% Quality Assurance</p>
                                    </div>
                                    <div className="flex items-center media_box flex-col space-x-2">
                                        <img src="https://yantratools.com/public/uploads/delivered.png" className="w-6 h-6" alt="Trusted Delivery" />
                                        <p className="text-sm text-gray-600">Trusted Delivery</p>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                    <a href="/" className="bg-yellow-500 text-white rounded-lg py-2 px-4 shadow-md">Buy now</a>
                                    <a href="/" className="bg-blue-500 text-white rounded-lg py-2 px-4 shadow-md">
                                        <i className="fa fa-shopping-basket mr-1"></i>Add to cart
                                    </a>
                                    <a href="/" className="bg-white border border-gray-300 text-gray-600 rounded-lg py-2 px-3 hover:bg-gray-100">
                                        <i className="fa fa-heart mr-1"></i>Save
                                    </a>
                                </div>

                                <div className="mt-4 flex flex-wrap items-center">
                                    <div className="w-1/6">
                                        <div className="text-sm font-medium mt-2">Share:</div>
                                    </div>
                                    <div className="w-5/6">
                                        <div id="share" className="flex space-x-3 mt-2">
                                            <a target="_self" href="/">
                                                <i className="fa fa-at"></i>
                                            </a>
                                            <a target="_blank" href="/">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a target="_blank" href="/">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a target="_blank" href="/">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                            <a target="_blank" href="/">
                                                <i className="fa fa-pinterest"></i>
                                            </a>
                                            <a target="_blank" href="/">
                                                <i className="fa fa-stumbleupon"></i>
                                            </a>
                                            <a target="_self" href="/">
                                                <i className="fa fa-whatsapp"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </main>
                    </div>
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
                                                                <p><b><span className="text-sm">Bio Medical Waste Bin Trolley Set of 3 with Frame 32L Capacity</span></b></p>
                                                                <p><b><span className="text-sm">Specification:</span></b></p>
                                                                <ul className="list-disc pl-5">
                                                                    <li><span className="text-sm">Product Type: Bio Medical Waste Bin</span></li>
                                                                    <li><span className="text-sm">Body Material: Polypropylene</span></li>
                                                                    <li><span className="text-sm">Trolley: Available</span></li>
                                                                    <li><span className="text-sm">Trolley Material: Stainless Steel</span></li>
                                                                    <li><span className="text-sm">Volume: 32L per bin</span></li>
                                                                    <li><span className="text-sm">Dimension (L x W x H): 440 X 300 X 440 mm per bin</span></li>
                                                                    <li><span className="text-sm">Weight: 60 Kg (Approx.)</span></li>
                                                                </ul>
                                                                <p><b><span className="text-sm">Features:</span></b></p>
                                                                <ul className="list-disc pl-5">
                                                                    <li><strong><span className="text-sm">Three 32-Liter Bins:</span></strong> Ideal for sorting and collecting different types of bio-medical waste.</li>
                                                                    <li><strong><span className="text-sm">Durable Construction:</span></strong> Made from high-quality, easy-to-clean materials that resist odors and stains.</li>
                                                                    <li><strong><span className="text-sm">Secure Frame:</span></strong> Provides stability and makes moving the bins hassle-free, ensuring safe and efficient waste management.</li>
                                                                </ul>
                                                                <p><b><span className="text-sm">Description:</span></b></p>
                                                                <p><span className="text-sm">Efficiently manage bio-medical waste with the Bio Medical Waste Bin Trolley Set of 3 with Frame. Each bin has a 32-liter capacity, offering ample space for safe and hygienic waste disposal. The set includes a sturdy frame that supports the bins, making transportation and handling easy and secure. Perfect for hospitals, clinics, and other medical facilities, this trolley set streamlines waste management while enhancing safety and convenience.</span></p>
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
            </section>
        </div>
    );
}
