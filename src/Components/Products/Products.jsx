import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import Button from "../Button.jsx";
import Trend_Spad from "../Trend_Spad/Trend_Spad.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductSlider({ SectionTitle }) {
    const [categories, setCategories] = useState([]);
    const [productsByCategory, setProductsByCategory] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/machintools/public/api/getcategorieslist');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCategories(data.categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);
 
    useEffect(() => {
        const fetchProductsByCategoryId = async (id) => {
            try {
                const response = await fetch(`/machintools/public/api/getproductbycategoryid/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(`Products for category ID ${id}:`, data.products); 
                setProductsByCategory(prevState => ({ ...prevState, [id]: data.products || [] }));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        categories.forEach(category => {
            fetchProductsByCategoryId(category.id);
        });
    }, [categories]);

    const handleCategoryClick = (slug) => {
        navigate(`/category/${slug}`);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            {categories.map((category) => (
                <div key={category.id}>
                    <div className="container mx-auto productSlider">
                        <div className="trend__content">
                            <div className="section-title">
                                <h4 className="text-xl font-bold">{category.title}</h4>
                                <Button Name={"View More"} />
                            </div>
                        </div>
                        <Slider {...settings}>
                            {productsByCategory[category.id]?.map((product) => (
                                <div key={product.id} onClick={() => handleCategoryClick(product.slug)}>
                                    <Trend_Spad
                                        ProductTitle={product.title}
                                        ImgName={product.photo ? `https://siyabling.com${product.photo}` : "https://via.placeholder.com/150"}
                                        Price={product.Price}
                                        stars={product.stars}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            ))}
        </>
    );
}
