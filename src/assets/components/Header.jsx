import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            {/* <img /> */}
            <h2>Logo Vinted</h2>
            <div>
                <div>
                    Search Bar - Recherche des articles
                </div>
                <div>
                    Trier par prix
                    Prix entre : 0€ & 1000€
                </div>
            </div>
            <div>
                <button>S&apos;inscrire</button>
                <button>Se connecter</button>
            </div>

            <div>
                <Link to='/'>Home</Link>
                {/* <Link to='/offer'>Offer</Link> */}
            </div>

            <button>Vends tes articles</button>
        </header>
    )
}

export default Header;