import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section id="not-found-page">
            <div className="not-found-container">
                <h1>404</h1>
                <h2>Oops! Page Not Found</h2>
                <p>Looks like this page went for a walk and got lost.</p>
                
                <div className="not-found-img">
                    <img 
                        src="https://media.istockphoto.com/id/1152115664/photo/pug-dog-with-question-mark.jpg?s=612x612&w=0&k=20&c=h7kKjE6lV6gVvJ8Yc5VpWqWqX9Yh5Z5XqX9Yh5Z5XqX=" 
                        alt="Sad Pug" 
                    />
                </div>

                <Link to="/" className="btn home-btn">Go Back Home</Link>
            </div>
        </section>
    );
}