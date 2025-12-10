import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import * as petService from '../../services/petService';
import AuthContext from '../../contexts/AuthContext';
import CatalogItem from '../catalog/CatalogItem';

export default function Profile() {
    const { userId, userEmail } = useContext(AuthContext);
    const [myPets, setMyPets] = useState([]);

    useEffect(() => {
        petService.getMyPets(userId)
            .then(result => {
                setMyPets(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [userId]);

    return (
        <section id="profile-page">
            <div className="profile-header">
                <div className="profile-img">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" />
                </div>
                <div className="profile-info">
                    <h2>My Profile</h2>
                    <p>Email: <strong>{userEmail}</strong></p>
                    <p>My Posts: <strong>{myPets.length}</strong></p>
                </div>
            </div>

            <div className="profile-pets">
                <h3>My Pets</h3>
                
                <div className="allPets">
                    {myPets.length > 0 
                        ? myPets.map(pet => <CatalogItem key={pet._id} {...pet} />)
                        : (
                            <div className="no-posts">
                                <p>You haven't posted any pets yet.</p>
                                <Link to="/create" className="btn">Create your first pet</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}