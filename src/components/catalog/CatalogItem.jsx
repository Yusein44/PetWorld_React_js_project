import { Link } from 'react-router-dom';

export default function CatalogItem({
    _id,
    name,
    breed,
    imageUrl,
}) {
    return (
        <div className="card">
            <div className="card-top">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="card-body">
                <h3>{name}</h3>
                <p>Breed: <span>{breed}</span></p>
                <Link to={`/catalog/${_id}`} className="btn details-btn">
                    Details
                </Link>
            </div>
        </div>
    );
}