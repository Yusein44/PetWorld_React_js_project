import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as petService from '../../services/petService';
import CatalogItem from '../catalog/CatalogItem';

export default function Home() {
    const [latestPets, setLatestPets] = useState([]);

    useEffect(() => {
        petService.getLatest()
            .then(result => setLatestPets(result))
            .catch(err => console.log(err));
    }, []);

    return (
        <section id="home-page">
            <div className="hero-section">
                <div className="hero-overlay"></div> 
                
                <div className="hero-content">
                    <h1>Welcome to PetWorld!</h1>
                    <h3>Find your new best friend or share yours with the world.</h3>
                    
                    <div className="hero-buttons">
                        <Link to="/catalog" className="btn hero-btn">Check Catalog</Link>
                        <Link to="/create" className="btn hero-btn secondary">Add Pet</Link>
                    </div>
                </div>
            </div>

            <div className="latest-products">
                <div className="latest-heading">
                    <h2>Latest Additions</h2>
                    <p>Meet our newest friends looking for a home</p>
                </div>

                <div className="allPets">
                    {latestPets.length > 0 
                        ? latestPets.map(pet => <CatalogItem key={pet._id} {...pet} />)
                        : <p className="no-pets">No pets added yet.</p>
                    }
                </div>
            </div>
        </section>
    );
}