import React from 'react';
import './Product_Details.css'
import { useParams } from 'react-router-dom';
import motor1 from '../../Img/motor1.jpeg';
import motor2 from '../../Img/motor2.jpeg';
import motor3 from '../../Img/motor3.jpeg';
import motor4 from '../../Img/motor4.jpeg';

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

    return (
        <div>
            <section className="py-5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <aside className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                            <div className="border rounded-lg mb-4 flex justify-center">
                                <a data-fslightbox="mygallery" href={product.ImgName} target="_blank" rel="noreferrer">
                                    <img className="max-w-full max-h-screen rounded-lg"
                                        src={product.ImgName} alt={product.ProductTitle} />
                                </a>
                            </div>
                            <div className="flex justify-center space-x-3">
                                <img width="60" height="60" className="rounded-lg"
                                    src={product.ImgName} alt={product.ProductTitle} />
                                <img width="60" height="60" className="rounded-lg"
                                    src={product.ImgName} alt={product.ProductTitle} />
                                <img width="60" height="60" className="rounded-lg"
                                    src={product.ImgName} alt={product.ProductTitle} />
                            </div>
                        </aside>
                        <main className="w-full lg:w-1/2 px-4">
                            <div>
                                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                                    {product.ProductTitle}
                                </h4>
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="flex items-center">
                                        {[...Array(product.stars)].map((_, index) => (
                                            <i key={index} className="fa fa-star text-yellow-400 px-1"></i>
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
                                        <div className="flex items-center border border-gray-300 rounded-md">
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
                                    <a href="#" className="bg-yellow-500 text-white rounded-lg py-2 px-4 shadow-md">Buy now</a>
                                    <a href="#" className="bg-blue-500 text-white rounded-lg py-2 px-4 shadow-md">
                                        <i className="fa fa-shopping-basket mr-1"></i>Add to cart
                                    </a>
                                    <a href="#" className="bg-white border border-gray-300 text-gray-600 rounded-lg py-2 px-3 hover:bg-gray-100">
                                        <i className="fa fa-heart mr-1"></i>Save
                                    </a>
                                </div>

                                <div className="mt-4 flex flex-wrap items-center">
                                    <div className="w-1/6">
                                        <div className="text-sm font-medium mt-2">Share:</div>
                                    </div>
                                    <div className="w-5/6">
                                        <div id="share" className="flex space-x-3 mt-2">
                                            <a target="_self" href="#">
                                                <i className="fa fa-at"></i>
                                            </a>
                                            <a target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a target="_blank" href="#">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                            <a target="_blank" href="#">
                                                <i className="fa fa-pinterest"></i>
                                            </a>
                                            <a target="_blank" href="#">
                                                <i className="fa fa-stumbleupon"></i>
                                            </a>
                                            <a target="_self" href="#">
                                                <i className="fa fa-whatsapp"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </div>
    );
}
