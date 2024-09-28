import React from 'react';
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="container-fluid">
                <div class="row flex flex-wrap">
                    <div class="col-xl-3 col-lg-2 w-full lg:w-2/12 xl:w-3/12">
                        <div class="header__logo">
                            <a href="./index.html">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-7 w-full lg:w-7/12 xl:w-6/12">
                        <nav class="header__menu">
                            <ul class="flex space-x-6">
                                <li class="active">
                                    <a href="./index.html">Home</a>
                                </li>
                                <li><a href="#">Women’s</a></li>
                                <li><a href="#">Men’s</a></li>
                                <li><a href="./shop.html">Shop</a></li>
                                <li class="relative group">
                                    <a href="#">Pages</a>
                                    <ul class="dropdown hidden group-hover:block absolute bg-white shadow-lg mt-2">
                                        <li><a href="./product-details.html" class="block px-4 py-2">Product Details</a></li>
                                        <li><a href="./shop-cart.html" class="block px-4 py-2">Shop Cart</a></li>
                                        <li><a href="./checkout.html" class="block px-4 py-2">Checkout</a></li>
                                        <li><a href="./blog-details.html" class="block px-4 py-2">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html">Blog</a></li>
                                <li><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-lg-3 w-full lg:w-3/12">
                        <div class="header__right flex justify-end space-x-4 items-center">
                            <div class="header__right__auth space-x-4">
                                <a href="#">Login</a>
                                <a href="#">Register</a>
                            </div>
                            <ul class="header__right__widget flex space-x-4">
                                <li>
                                    <span class="icon_search search-switch"></span>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="icon_heart_alt"></span>
                                        <div class="tip bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="icon_bag_alt"></span>
                                        <div class="tip bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">2</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="canvas__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    )
}
