import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ handleToken }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://lereacteur-vinted-api.herokuapp.com/user/login', {
                email,
                password
            });
            // console.log(response.data);
            handleToken(response.data.token);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-container">
            <h2 className="title-login">Se connecter</h2>
            <form className="form-login" onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="Adresse email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type="submit" 
                    className="btn-form-login"
                    value="Se connecter"
                    onChange={() => handleToken()}
                />
            </form>
            <Link className="link-login" to="/login">
                <p>Tu as déjà un compte ? Connecte-toi !</p>
            </Link>
        </div>
    )
}

export default Login;