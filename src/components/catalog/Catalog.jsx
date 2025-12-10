import { useEffect, useState } from "react";
import * as petService from '../../services/petService';
import CatalogItem from "./CatalogItem";

export default function Catalog() {
    const [pets, setPets] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const onSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const onSearchSubmit = (e) => {
        e.preventDefault();

        if (searchTerm === '') {
             petService.getAll().then(result => setPets(result));
             return;
        }

        petService.search(searchTerm)
            .then(result => {
                setPets(result);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <section id="catalog-page">
            <h1>All Pets</h1>

            <div className="search-wrapper">
                <form onSubmit={onSearchSubmit} className="search-form">
                    <input 
                        type="text" 
                        name="search" 
                        placeholder="Search by name..." 
                        value={searchTerm}
                        onChange={onSearchChange}
                    />
                    <button type="submit" className="btn search-btn">Search</button>
                </form>
            </div>

            <div className="allPets">
                {pets.length > 0 
                    ? pets.map(pet => <CatalogItem key={pet._id} {...pet} />)
                    : <h3 className="no-articles">No pets found</h3>
                }
            </div>
        </section>
    );
}