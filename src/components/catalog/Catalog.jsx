import CatalogItem from "./CatalogItem";

export default function Catalog() {
const pets = [
        {
            _id: '1',
            name: 'Max',
            breed: 'Golden Retriever',
            imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80'
        },
        {
            _id: '2',
            name: 'Bella',
            breed: 'Siamese Cat',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1664357541544-fb0e6bdc4dd9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            _id: '3',
            name: 'Coco',
            breed: 'Macaw Parrot',
            imageUrl: 'https://images.unsplash.com/photo-1680749512095-039b69a23ad2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        },
        {
            _id: '4',
            name: 'Shadow',
            breed: 'Black Panther',
            imageUrl: 'https://images.unsplash.com/photo-1557692538-9564c4b2cd13?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];
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