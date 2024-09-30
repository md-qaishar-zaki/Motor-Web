import React from 'react';
import { useParams } from 'react-router-dom';
import motor1 from '../../Img/motor1.jpeg';
import motor2 from '../../Img/motor2.jpeg';
import motor3 from '../../Img/motor3.jpeg';
import motor4 from '../../Img/motor4.jpeg';

export default function Project_Details() {
    const { id } = useParams();  // Get product ID from URL

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
                <div className="container mx-auto">
                    <div className="flex flex-wrap mx-5">
                        <aside className="lg:w-1/2 px-5">
                            <div className="border rounded-4 mb-3 flex justify-center">
                                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image"
                                    href={product.ImgName}>
                                    <img className="max-w-full max-h-screen mx-auto rounded-4"
                                        src={product.ImgName} alt={product.ProductTitle} />
                                </a>
                            </div>
                            <div className="flex justify-center mb-3">
                                <img width="60" height="60" className="rounded-2"
                                    src={product.ImgName} alt={product.ProductTitle} />
                                <img width="60" height="60" className="rounded-2"
                                    src={product.ImgName} alt={product.ProductTitle} />
                                <img width="60" height="60" className="rounded-2"
                                    src={product.ImgName} alt={product.ProductTitle} />
                            </div>
                        </aside>
                        <main className="lg:w-1/2 px-5">
                            <div className="ps-lg-3">
                                <h4 className="title text-gray-800">
                                    {product.ProductTitle}
                                </h4>
                                <div className="flex flex-row my-3">
                                    <div className="text-yellow-500 mb-1 mr-2">
                                        {[...Array(product.stars)].map((_, index) => (
                                            <i key={index} className="fa fa-star text-yellow-400"></i>
                                        ))}
                                        <span className="ml-1">{product.stars}</span>
                                    </div>
                                    <span className="text-gray-500"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                    <span className="text-green-500 ml-2">In stock</span>
                                </div>

                                <div className="mb-3">
                                    <span className="text-lg font-bold">₹{product.Price}</span>
                                </div>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eligendi aliquam nostrum temporibus soluta vitae labore inventore aspernatur, quos nam.
                                </p>

                                <div className="grid grid-cols-3 mb-4">
                                    <dt className="font-semibold">Type:</dt>
                                    <dd className="col-span-2">Regular</dd>

                                    <dt className="font-semibold">Color</dt>
                                    <dd className="col-span-2">Brown</dd>

                                    <dt className="font-semibold">Material</dt>
                                    <dd className="col-span-2">Cotton, Jeans</dd>

                                    <dt className="font-semibold">Brand</dt>
                                    <dd className="col-span-2">Reebook</dd>
                                </div>

                                <hr className="my-4" />

                                <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
                                    <div className="mb-3">
                                        <label className="block mb-2">Size</label>
                                        <select className="form-select border border-gray-400 rounded-md" >
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>Large</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="block mb-2">Quantity</label>
                                        <div className="flex mb-3" >
                                            <button className="btn border border-gray-400 px-3" type="button" id="button-addon1">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <input type="text" className="form-control text-center border border-gray-400" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                            <button className="btn border border-gray-400 px-3" type="button" id="button-addon2">
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="bg-yellow-500 text-white rounded py-2 px-4 shadow-md"> Buy now </a>
                                <a href="#" className="bg-blue-500 text-white rounded py-2 px-4 shadow-md"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                                <a href="#" className="bg-white border border-gray-400 py-2 px-3 rounded hover:bg-gray-100"> <i className="me-1 fa fa-heart fa-lg"></i> Save </a>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </div>
    )
}
