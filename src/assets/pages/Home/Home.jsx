import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Home.css';

import Hero from '../../components/Hero/Hero';

const Home = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // console.log("useEffect");
        const fetchData = async () => {
            try {
                const response = await axios.get('https://lereacteur-vinted-api.herokuapp.com/v2/offers');
                // console.log(response.data);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const getDetail = (details, key) => {
        const detailObj = details.find(detail => Object.keys(detail)[0] === key);
        return detailObj ? detailObj[key] : null;
    };

    return isLoading ? <span>Loading...</span> : (
        <>
            <Hero />
            <main className="main">
            {data.offers.map((offer) => {
                const taille = getDetail(offer.product_details, "TAILLE");
                const marque = getDetail(offer.product_details, "MARQUE");

                return (
                    <Link className="link-article" key={offer._id} to={`offer/${offer._id}`}>
                        <div className="article">
                            <div className="header-article">
                                {offer.owner.account.avatar && offer.owner.account.avatar.secure_url && (
                                    <img src={offer.owner.account.avatar.secure_url} alt="Logo User" />
                                )}
                                <h2 className="title-header-article">{offer.owner.account.username}</h2>
                            </div>
                            <img className="img-article" src={offer.product_image.secure_url} alt="Photo article" />
                            <div className="infos-article">
                                <span className="price-article">{offer.product_price.toFixed()} €</span>
                                {taille && <span className="size-article">{taille}</span>}
                                {marque && <span className="mark-article">{marque}</span>}
                            </div>
                        </div>
                    </Link>
                )
            })}
            </main>
        </>
    )
}

export default Home;