import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

export default function Header() {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">PetWorld</Link></h1>
            <nav>
                <Link to="/catalog">Catalog</Link>

                {isAuthenticated && (
                    <div id="user">
                        <Link to="/create">Create Post</Link>
                        <Link to="/logout">Logout</Link>
                        <Link to="/profile" style={{textDecoration: 'none'}}>
                            <span style={{color: 'white', marginLeft: '10px', cursor: 'pointer'}}>
                                Hello, {userEmail}
                            </span>
                        </Link>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}