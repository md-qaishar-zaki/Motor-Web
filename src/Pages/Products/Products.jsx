import React from 'react' 
import { useNavigate } from 'react-router-dom';
import Trend_Spad from '../../Trend_Spad/Trend_Spad.jsx'
import motor1 from '../../../Img/motor1.jpeg'
import motor2 from '../../../Img/motor2.jpeg'
import motor3 from '../../../Img/motor3.jpeg'
import motor4 from '../../../Img/motor4.jpeg'
import Button from '../../../Components/Button.jsx'

export default function Products({ SectionTitle }) {
    const navigate = useNavigate();

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

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="container mx-auto productList">
            <div className="trend__content">
                <div className="section-title">
                    <h4 className="text-xl font-bold">{SectionTitle}</h4>
                    <Button Name={'View More'} />
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                    <div key={product.id} onClick={() => handleProductClick(product.id)}>
                        <Trend_Spad
                            ProductTitle={product.ProductTitle}
                            ImgName={product.ImgName}
                            Price={product.Price}
                            stars={product.stars}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}