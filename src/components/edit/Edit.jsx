import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as petService from '../../services/petService';
import useForm from "../../hooks/useForm";

export default function Edit() {
    const navigate = useNavigate();
    const { petId } = useParams();
    
    const editPetSubmitHandler = async (values) => {
        try {
            await petService.edit(petId, values);
            navigate(`/catalog/${petId}`);
        } catch (err) {
            console.log(err);
        }
    }

    const { values, onChange, onSubmit, changeValues } = useForm(editPetSubmitHandler, {
        name: '',
        breed: '',
        imageUrl: '',
        description: '',
    });

    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                changeValues(result);
            });
    }, [petId]);

    return (
        <section id="edit-page">
            <div className="create-container">
                <div className="create-side-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1000&q=80")'}}></div>

                <div className="create-form-container">
                    <h1>Edit Pet</h1>
                    <p>Update information about your friend</p>

                    <form id="edit" onSubmit={onSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={values.name}
                                onChange={onChange}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="breed">Breed</label>
                            <input
                                type="text"
                                name="breed"
                                id="breed"
                                value={values.breed}
                                onChange={onChange}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="imageUrl">Image URL</label>
                            <input
                                type="text"
                                name="imageUrl"
                                id="imageUrl"
                                value={values.imageUrl}
                                onChange={onChange}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="description">Description</label>
                            <textarea 
                                name="description" 
                                id="description" 
                                value={values.description}
                                onChange={onChange}
                            ></textarea>
                        </div>

                        <input className="btn submit-btn" type="submit" value="Save Changes" />
                    </form>
                </div>
            </div>
        </section>
    );
}