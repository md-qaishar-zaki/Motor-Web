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
                <div className="row flex flex-wrap"> 
                    <div className="w-full lg:w-1/2 flex items-center">
                        <div className="canvas__open" onClick={toggleMenu}>
                            <i className="fa fa-bars"></i>
                        </div>
                        <div className="header__logo ml-4">
                            <a href="./index.html">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-end items-center">
                        <div className="header__right flex space-x-4 items-center">
                            <div className="header__right__auth space-x-4">
                                <a href="#">Login</a>
                                <a href="#">Register</a>
                            </div>
                            <ul className="header__right__widget flex space-x-4">
                                <li>
                                    <span className="icon_search search-switch"></span>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon_heart_alt"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
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
                        <li><a href="#">Electric Motors</a></li>
                        <li><a href="#">Geared Motor</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}