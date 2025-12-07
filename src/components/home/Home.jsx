import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section id="home-page" className="hero-section">
            <div className="hero-content">
                <h1>Welcome to PetWorld!</h1>
                <h3>Find your new best friend or share yours with the world.</h3>
                
                <div className="hero-buttons">
                    <Link to="/catalog" className="btn hero-btn">Check Catalog</Link>
                </div>
            </div>
        </section>
    );
}