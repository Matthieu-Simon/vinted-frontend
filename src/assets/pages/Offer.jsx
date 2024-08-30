import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Offer = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

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
            <main className="offer-article">
                <div className="article-details">
                    <img className="img-offer" src={data.product_image.secure_url} alt="Photo article" />
                    <div>
                        <div className="offer-details">
                            <span>{data.product_price} €</span>
                            <ul>
                                {data.product_details.map((detail, index) => {
                                    {/* console.log(detail) */}
                                    const key = Object.keys(detail)[0];
                                    const value = detail[key];

                                    return (
                                        <li key={index}>
                                            {key} : {value}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="divider"></div>
                        <div className="description-offer">
                            <div>
                                <h3>{data.product_name}</h3>
                                <span>{data.product_description}</span>
                            </div>
                            <div>
                                <img className="avatar-user-offer" src={data.owner.account.avatar.secure_url} alt="Avatar Username" />
                                <span>{data.owner.account.username}</span>
                            </div>
                        </div>
                        <button>Acheter</button>
                    </div>
                </div>
            </main>
        )
    )
}

export default Offer;