import Logo from '../img/logo.png';


const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={Logo} alt="Logo Vinted" />
            <div>
                <div>
                    Search Bar - Recherche des articles
                </div>
                <div>
                    Trier par prix
                    Prix entre : 0€ & 1000€
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