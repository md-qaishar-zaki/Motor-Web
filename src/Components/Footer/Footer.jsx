import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer pt-4 bg-gray-50">
            <div className="container mx-auto px-4 footer__newslatter">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/3 md:w-1/2 sm:w-3/4 ">
                        <div className="footer__about">
                            <div className="footer__logo mb-4">
                                <a href="./index.html">
                                    {/* <img src="img/logo.png" alt="Logo" className="w-32" /> */}
                                    <h6>Logo</h6>
                                </a>
                            </div>
                            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/6 md:w-1/3 sm:w-1/2 ">
                        <div className="footer__widget">
                            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Blogs</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                                <li><a href="#" className="hover:underline">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/6 md:w-1/3 sm:w-1/2 ">
                        <div className="footer__widget">
                            <h6 className="text-lg font-semibold mb-4">Account</h6>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">My Account</a></li>
                                <li><a href="#" className="hover:underline">Orders Tracking</a></li>
                                <li><a href="#" className="hover:underline">Checkout</a></li>
                                <li><a href="#" className="hover:underline">Wishlist</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 md:w-2/3 sm:w-full ">
                        <div className="footer__newsletter">
                            <h6 className="text-lg font-semibold mb-4">NEWSLETTER</h6>
                            <form action="#" className="flex mb-4">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="px-4 py-2 w-2/3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                />
                                <button type="submit" className="site-btn bg-red-500 text-white px-6 py-2">Subscribe</button>
                            </form>
                            <div className="footer__social flex space-x-4">
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
            <div className="text-center mt-1 bg-gray-200 py-5">
                <p className="text-gray-400 m-0">
                    &copy; <script>document.write(new Date().getFullYear());</script>2024 All rights reserved | This ...
                </p>
            </div>
        </footer>
    )
}
