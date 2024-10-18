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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
                setError("Failed to load categories.");
            } finally {
                setLoading(false);
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
                setProductsByCategory(prevState => ({ ...prevState, [id]: data.product || [] }));
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(`Failed to load products for category ID ${id}.`);
            }
        };


        const fetchAllProducts = async () => {
            await Promise.all(categories.map(category => fetchProductsByCategoryId(category.id)));
        };

        if (categories.length > 0) {
            fetchAllProducts();
        }
    }, [categories]);

    const handleProductClick = (slug) => {
        navigate(`product/${slug}`);
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

    Array(5).fill().forEach(() => settings);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

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
                            {productsByCategory[category.id]?.length > 0 ? (
                                productsByCategory[category.id].map((product) => (
                                    <div key={`${category.id}-${product.id}`} onClick={() => handleProductClick(product.id)}>

                                        <Trend_Spad
                                            ProductTitle={product.title}
                                            ImgName={product.photoproduct?.[0].photo_path}
                                            Price={product.price}
                                            stars={product.rating}
                                        />
                                    </div>
                                ))
                            ) : (
                                <div>No products available</div>
                            )}
                        </Slider>
                    </div>
                </div>
            ))}
        </>
    );
}
