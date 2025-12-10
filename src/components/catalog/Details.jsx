import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import * as petService from '../../services/petService';
import * as likeService from '../../services/likeService';
import AuthContext from '../../contexts/AuthContext';

export default function Details() {
    const navigate = useNavigate();
    const { petId } = useParams();
    const { userId, isAuthenticated } = useContext(AuthContext);
    
    const [pet, setPet] = useState({});
    const [totalLikes, setTotalLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        petService.getOne(petId)
            .then(setPet);

        likeService.getPetLikes(petId)
            .then(setTotalLikes);

        if (isAuthenticated) {
            likeService.getMyLike(petId, userId)
                .then(result => {
                    setHasLiked(result > 0);
                });
        }
    }, [petId, userId, isAuthenticated]);

    console.log(`Current User: ${userId}`);
    console.log(`Pet Owner: ${pet._ownerId}`);

    const isOwner = userId === pet._ownerId;

    const deleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${pet.name}?`);

        if (isConfirmed) {
            try {
                await petService.remove(petId);
                navigate('/catalog');
            } catch (err) {
                console.log(err);
            }
        }
    };

    const likeButtonHandler = async () => {
        try {
            await likeService.like(petId);
            setTotalLikes(state => state + 1);
            setHasLiked(true);
        } catch (err) {
            console.log(err);
        }
    };

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
                            <button className="button delete-button" onClick={deleteHandler}>Delete</button>
                        </>
                    )}

                    {isAuthenticated && !isOwner && !hasLiked && (
                        <button className="button like-button" onClick={likeButtonHandler}>Like</button>
                    )}

                    {isAuthenticated && !isOwner && hasLiked && (
                        <div className="liked-message">You liked this pet! ❤️</div>
                    )}

                    <div className="likes-count">
                        Likes: <span id="total-likes">{totalLikes}</span>
                    </div>
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