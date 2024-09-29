import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer pt-8 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">

                    {/* About Section */}
                    <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full mb-8">
                        <div className="footer__about">
                            <div className="footer__logo mb-4">
                                <a href="./index.html">
                                    {/* <img src="img/logo.png" alt="Logo" className="w-32" /> */}
                                    <h6 className="text-2xl font-bold">Logo</h6>
                                </a>
                            </div>
                            <p className="text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full lg:w-1/6 md:w-1/3 sm:w-1/2 mb-8">
                        <div className="footer__widget">
                            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Blogs</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                                <li><a href="#" className="hover:underline">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Account Links */}
                    <div className="w-full lg:w-1/6 md:w-1/3 sm:w-1/2 mb-8">
                        <div className="footer__widget">
                            <h6 className="text-lg font-semibold mb-4">Account</h6>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:underline">My Account</a></li>
                                <li><a href="#" className="hover:underline">Orders Tracking</a></li>
                                <li><a href="#" className="hover:underline">Checkout</a></li>
                                <li><a href="#" className="hover:underline">Wishlist</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="w-full lg:w-1/3 md:w-2/3 sm:w-full mb-8">
                        <div className="footer__newsletter">
                            <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
                            <form action="#" className="flex space-y-4 md:space-y-0">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="px-4 py-2 w-full md:w-2/3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                />
                                <button type="submit" className="site-btn bg-red-500 text-white px-6 py-2 w-full md:w-auto rounded-lg md:ml-2">Subscribe</button>
                            </form>
                            <div className="footer__social flex space-x-4 mt-6">
                                <a href="#" className="text-xl hover:text-gray-400"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="text-xl hover:text-gray-400"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="text-xl hover:text-gray-400"><i className="fa fa-youtube"></i></a>
                                <a href="#" className="text-xl hover:text-gray-400"><i className="fa fa-instagram"></i></a>
                                <a href="#" className="text-xl hover:text-gray-400"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="text-center mt-6 bg-gray-200 py-4">
                <p className="text-gray-500">
                    &copy; <script>document.write(new Date().getFullYear());</script> 2024 All rights reserved | This template is made ...
                </p>
            </div>
        </footer>
    )
}
