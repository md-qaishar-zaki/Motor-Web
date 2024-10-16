import React, { useState, useEffect, useRef } from 'react';
import './Header.css';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header px-9">
            <div className="container-fluid">
                <div className="row flex flex-wrap justify-between">
                    <div className="w-3/10 lg:w-3/10 flex items-center">
                        <div className="canvas__open" onClick={toggleMenu}>
                            <i className="fa fa-bars"></i>
                        </div>
                        <div className="header__logo ml-4">
                            <a href="./index.html">
                                {/* <img src="img/logo.png" alt="" /> */}
                                <h6>Logo</h6>
                            </a>
                        </div>
                    </div>
                    <div className="w-7/10 lg:w-7/10 flex justify-around items-center">
                        <div className="InputSearch">
                            <input type="text" name="" id="" placeholder='Search Products' />
                            <select name="All Categories" id="All Categories">
                                <option value="">All Categories</option>
                                <option value="">Farm machinery</option>
                                <option value="">Pump and motor</option>
                                <option value="">Workshop tools</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <div className="header__right flex space-x-4 items-center">
                            <div className="flex header__right__auth space-x-3 text-sm font-medium">
                                <a href="/">Login</a>
                                <a href="/">Register</a>
                                <div className="flex">
                                    <div className="cart">
                                        <span>2</span>
                                        <svg class="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"></path>
                                        </svg>
                                    </div>
                                    <div className="fav">
                                        <span>3</span>
                                        <svg class="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <ul className="header__right__widget flex space-x-4">
                                <li>
                                    <span className="icon_search search-switch"></span>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon_heart_alt"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon_bag_alt"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={sidebarRef}
                className={`offcanvas-menu-wrapper ${isMenuOpen ? 'active' : ''}`}
            >
                <nav className="offcanvas__menu">
                    <ul>
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="/">Electric Motors</a></li>
                        <li><a href="/">Geared Motor</a></li>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">Pages</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}