import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Offer.css';


const Offer = ({ userToken }) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (userToken) {
            navigate('/payment', {
                state: {
                    productId: data._id,
                    productName: data.product_name,
                    productPrice: data.product_price,
                    productImage: data.product_image.secure_url,
                    ownerName: data.owner.account.username
                },
            });
        } else {
            navigate('/login');
        }
    };

    useEffect(() => {
        // console.log('useEffect');
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/v2/offers/${id}`);
                // console.log(response.data);
                console.log(response.data.product_details);
                setData(response.data);
                setIsLoading(false);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id]);

    return (
        isLoading ? <span>Loading....</span> : (
            <div className="offer-body">
                <div className="offer-container">
                    <div className="offer-pictures">
                        <img className="img-offer" src={data.product_image.secure_url} alt="Photo article" />
                    </div>
                    
                    <div className="offer-infos">
                        <div className="offer-details">
                            <span className="offer-price">{data.product_price} €</span>
                            <ul className="offer-list">
                                {data.product_details.map((detail, index) => {
                                    {/* console.log(detail) */}
                                    const key = Object.keys(detail)[0];
                                    const value = detail[key];

                                    return (
                                        <li key={index}>
                                            <span>{key}</span>   
                                            <span>{value}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="divider"></div>

                        <div className="description-offer">
                            <h3 className="title">{data.product_name}</h3>
                            <p className="description">{data.product_description}</p>
                            <div className="offer-avatar">
                                <img className="avatar-user-offer" src={data.owner.account.avatar.secure_url} alt="Avatar Username" />
                                <span>{data.owner.account.username}</span>
                            </div>
                        </div>
                        <button 
                            className="btn-offer"
                            onClick={handleSubmit}
                        >
                            Acheter
                        </button>
                    </div>
                </div>
            </div>
        )
    )
}

export default Offer;