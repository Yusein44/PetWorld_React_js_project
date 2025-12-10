import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import * as petService from '../../services/petService';
import * as likeService from '../../services/likeService';
import * as commentService from '../../services/commentService';
import AuthContext from '../../contexts/AuthContext';

export default function Details() {
    const navigate = useNavigate();
    const { petId } = useParams();
    const { userId, isAuthenticated, userEmail } = useContext(AuthContext);
    
    const [pet, setPet] = useState({});
    const [totalLikes, setTotalLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        petService.getOne(petId)
            .then(setPet)
            .catch(err => console.log("Error pet:", err));

        likeService.getPetLikes(petId)
            .then(result => {
                setTotalLikes(result);
            })
            .catch(err => console.log("Error likes:", err));

        commentService.getByPetId(petId)
            .then(setComments)
            .catch(err => setComments([]));

        if (isAuthenticated && userId) {
            likeService.getMyLike(petId, userId)
                .then(result => {
                    setHasLiked(result > 0);
                })
                .catch(err => console.log("Error my like:", err));
        }
    }, [petId, userId, isAuthenticated]);

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

    const addCommentHandler = async (e) => {
        e.preventDefault();
        if(newComment.trim() === '') return;

        try {
            const result = await commentService.create(petId, newComment);
            result.author = { email: userEmail }; 
            setComments(state => [...state, result]);
            setNewComment('');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Breed: {pet.breed}</p>
                
                {pet.imageUrl && (
                    <p className="img">
                        <img src={pet.imageUrl} alt={pet.name} />
                    </p>
                )}
                
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

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.length > 0 ? (
                            comments.map(c => (
                                <li key={c._id} className="comment">
                                    <p><strong>{c.author?.email || "User"}:</strong> {c.comment}</p>
                                </li>
                            ))
                        ) : (
                            <p className="no-comment">No comments yet.</p>
                        )}
                    </ul>
                </div>

                {isAuthenticated && (
                    <article className="create-comment">
                        <label>Add new comment:</label>
                        <form className="form" onSubmit={addCommentHandler}>
                            <textarea 
                                name="comment" 
                                placeholder="Comment......"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            ></textarea>
                            <input className="btn submit-comment" type="submit" value="Add Comment" />
                        </form>
                    </article>
                )}

                <div className="back-btn-container">
                    <Link to="/catalog" className="btn back-btn">
                        &larr; Back to Catalog
                    </Link>
                </div>
            </div>
        </section>
    );
}