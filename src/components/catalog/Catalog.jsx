import { useEffect, useState } from "react";
import * as petService from '../../services/petService';
import CatalogItem from "./CatalogItem";

export default function Catalog() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Pets</h1>

            <div className="allPets">
                {pets.length > 0 
                    ? pets.map(pet => <CatalogItem key={pet._id} {...pet} />)
                    : <h3 className="no-articles">No pets yet</h3>
                }
            </div>
        </section>
    );
}