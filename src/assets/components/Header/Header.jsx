import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import './Header.css';

const Header = ({ handleToken, userToken }) => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (userToken) {
            setIsLogged(true);
        }
    },[userToken]);

    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={Logo} alt="Logo Vinted" />
            </Link>

            <div>
                <div className="searchbar-filter">
                        <input 
                            type="text" 
                            className="searchbar" 
                            placeholder="Recherche des articles"
                        />
                </div>

                {isLogged && (
                    <div className="filter-price">
                        <span className="filter-text">Trier par prix :</span>
                        <span className="checkbox-filter">
                            <input type="checkbox" name="price" />
                            <div className="wrapper">
                                <div className="arrow">
                                    <span className="arrow-up">⇡</span>
                                </div>
                            </div>
                        </span>
                        <span className="text-range">Prix entre :</span>
                        <div className="range-bar">
                            Range
                        </div>
                    </div>
                )}
            </div>

            <div className="section-register">
            {!userToken ? 
                <>
                    <Link to="/signup">
                        <button className="btn-register">S&apos;inscrire</button>
                    </Link>
                    <Link to="/login">
                        <button className="btn-login">Se connecter</button>
                    </Link>
                </> : <button type="submit" className="btn-logout" onClick={() => {handleToken(); window.location.reload()}} >Déconnexion</button>
            }
            </div>
            <Link to="/publish">
                <button className="btn-sell">Vends tes articles</button>
            </Link>
        </header>
    )
}

export default Header;