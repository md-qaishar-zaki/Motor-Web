import React from 'react'

export default function Project_Details() {
    return (
        <div>
            <section className="py-5">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-5">
                        <aside className="lg:w-1/2 px-5">
                            <div className="border rounded-4 mb-3 flex justify-center">
                                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image"
                                    href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
                                    <img className="max-w-full max-h-screen mx-auto rounded-4"
                                        src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
                                </a>
                            </div>
                            <div className="flex justify-center mb-3">
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                    href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
                                    <img width="60" height="60" className="rounded-2"
                                        src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                    href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp">
                                    <img width="60" height="60" className="rounded-2"
                                        src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                    href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp">
                                    <img width="60" height="60" className="rounded-2"
                                        src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                    href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp">
                                    <img width="60" height="60" className="rounded-2"
                                        src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                    href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
                                    <img width="60" height="60" className="rounded-2"
                                        src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
                                </a>
                            </div>
                        </aside>
                        <main className="lg:w-1/2 px-5">
                            <div className="ps-lg-3">
                                <h4 className="title text-gray-800">
                                    Quality Men's Hoodie for Winter, Men's Fashion <br />
                                    Casual Hoodie
                                </h4>
                                <div className="flex flex-row my-3">
                                    <div className="text-yellow-500 mb-1 mr-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <span className="ml-1">4.5</span>
                                    </div>
                                    <span className="text-gray-500"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                    <span className="text-green-500 ml-2">In stock</span>
                                </div>

                                <div className="mb-3">
                                    <span className="text-lg font-bold">$75.00</span>
                                    <span className="text-gray-500">/per box</span>
                                </div>

                                <p>
                                    Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the
                                    conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                                    men.
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
