import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

import './Publish.css';

const Publish = ({ userToken }) => {
    const [picture, setPicture] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [condition, setCondition] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description)
            formData.append("price", price)
            formData.append("condition", condition)
            formData.append("city", location)
            formData.append("brand", brand)
            formData.append("size", size)
            formData.append("color", color)
            formData.append("picture", picture)

            const response = await axios.post('https://lereacteur-vinted-api.herokuapp.com/offer/publish', formData, {
                headers: {
                    authorization: `Bearer ${userToken}`
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return userToken ? (
        <div className="publish-container">
            <h2 className="title-publish">Vends ton article</h2>
            <form className="form-publish" onSubmit={handleSubmit}>
                {!picture ? 
                    <div className="picture-container">
                        <label htmlFor="picture" className="label-picture">
                            Ajouter une photo
                        </label>
                        <input
                            className="input-picture"
                            id="picture"
                            type="file"
                            onChange={(e) => setPicture(e.target.files[0])}
                        />
                    </div> : <img className="img-publish" src={URL.createObjectURL(picture)} alt="Image de l'article" />
                }
                <div className="title-description-container">
                    <div className="title-description-publish">
                        <label className="title-publish-form" htmlFor="title">Titre</label>
                        <input 
                            id="title"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="description-publish-form" htmlFor="description">Décris ton article</label>
                        <input 
                            id="description"
                            type="textarea"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="section-details-publish">
                    <div>
                        <label htmlFor="brand">Marque</label>
                        <input 
                            id="brand"
                            type="text" 
                            placeholder="Brand"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="size">Taille</label>
                        <input 
                            id="size"
                            type="text" 
                            placeholder="Size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="color">Couleur</label>
                        <input 
                            id="color"
                            type="text" 
                            placeholder="Color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="condition">Etat</label>
                        <input 
                            id="condition"
                            type="text"
                            placeholder="État"
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="location">Lieu</label>
                        <input 
                            id="location"
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="price">Prix</label>
                    <input 
                        id="price"
                        type="number" 
                        placeholder="Prix"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                
                <input 
                    type="submit" 
                    className="btn-form-publish"
                    value="Ajouter"
                />
            </form>
        </div>
    ) : (
        <Navigate to="/login" />
    )
}

export default Publish;