import Logo from '../img/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={Logo} alt="Logo Vinted" />
            <div>
                <div className="searchbar-filter">
                    <input 
                        type="text" 
                        className="searchbar" 
                        placeholder="Recherche des articles"
                    />
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
                </div>
            </div>

            <div className="section-register">
                <button className="btn-register">S&apos;inscrire</button>
                <button className="btn-login">Se connecter</button>
            </div>

            <button className="btn-sell">Vends tes articles</button>
        </header>
    )
}

export default Header;