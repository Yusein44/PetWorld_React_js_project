import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>PetWorld</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
}