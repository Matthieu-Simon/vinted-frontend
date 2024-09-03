import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Signup.css';

const Signup = ({ handleToken }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsLetter, setNewsLetter] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://lereacteur-vinted-api.herokuapp.com/user/signup', {
                email,
                username,
                password,
                newsletter: newsLetter
            });
            console.log(response.data);
            handleToken(response.data.token);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="signup-container">
            <h2 className="title">S&apos;inscrire</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nom d'utilisateur" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Mot de passe" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="form-checkbox">
                    <div className="section-checkbox">
                        <input 
                            type="checkbox" 
                            checked={newsLetter} 
                            onChange={() => setNewsLetter(!newsLetter)}
                        />
                        <span>S&apos;inscire à notre newsletter</span>
                    </div>
                    <p>En m&apos;inscrivant, je confirme avoir lu et accepté les Termes & Conditions et Politique de Confidentialité de Vinted. Je confirme avoir au moins 18 ans.</p>
                </div>
                <button className="btn-form-submit" type="submit">S&apos;inscrire</button>
                <Link className="link-login" to="/login">
                    <p>Tu as déjà un compte ? Connecte-toi !</p>
                </Link>
            </form>
        </div>
    )
};

export default Signup;