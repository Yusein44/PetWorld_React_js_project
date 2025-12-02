import { useParams, Link } from 'react-router-dom';

export default function Details() {
    const { petId } = useParams();

    const pet = {
        _id: petId,
        name: 'Max',
        breed: 'Golden Retriever',
        imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
        description: 'Max is a very friendly dog. He loves playing fetch and eating treats. He is looking for a new home where he can run freely.',
        owner: 'Peter' 
    };

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Breed: {pet.breed}</p>
                <p className="img"><img src={pet.imageUrl} alt={pet.name} /></p>
                
                <div className="actions">
                    <Link className="button" to={`/catalog/${petId}/edit`}>Edit</Link>
                    <Link className="button" to="#">Delete</Link>
                </div>
            </div>

            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
} 