import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import * as petService from '../../services/petService';
import AuthContext from '../../contexts/AuthContext';

export default function Details() {
    const { petId } = useParams();
    const { userId } = useContext(AuthContext);
    const [pet, setPet] = useState({});

    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                setPet(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [petId]);

    const isOwner = userId === pet._ownerId;

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Breed: {pet.breed}</p>
                <p className="img">
                    <img src={pet.imageUrl} alt={pet.name} />
                </p>
                
                <div className="actions">
                    {isOwner && (
                        <>
                            <Link className="button" to={`/catalog/${petId}/edit`}>Edit</Link>
                            <Link className="button" to={`/catalog/${petId}/delete`}>Delete</Link>
                        </>
                    )}
                </div>
            </div>

            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>

                <div className="back-btn-container">
                    <Link to="/catalog" className="btn back-btn">
                        &larr; Back to Catalog
                    </Link>
                </div>
            </div>
        </section>
    );
}